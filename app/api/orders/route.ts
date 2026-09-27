import { NextRequest, NextResponse } from 'next/server';
import { getDbUser, sql } from '@/lib/db-user';

export async function GET(req: NextRequest) {
  const dbUser = await getDbUser(req);
  if (!dbUser) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const orders = await sql`
    SELECT * FROM orders WHERE buyer_id = ${dbUser.id} ORDER BY created_at DESC
  `;

  const items = await sql`
    SELECT oi.* FROM order_items oi
    JOIN orders o ON o.id = oi.order_id
    WHERE o.buyer_id = ${dbUser.id}
  `;

  const ordersWithItems = orders.map((order) => ({
    ...order,
    order_items: items.filter((item) => item.order_id === order.id),
  }));

  return NextResponse.json({ orders: ordersWithItems });
}

export async function POST(req: NextRequest) {
  const dbUser = await getDbUser(req);
  if (!dbUser) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ error: 'Invalid body' }, { status: 400 });

  const { shipping_address } = body;
  if (!shipping_address || typeof shipping_address !== 'string') {
    return NextResponse.json({ error: 'shipping_address is required' }, { status: 400 });
  }

  const cartItems = await sql`
    SELECT ci.sku_id, ci.quantity, s.price
    FROM cart_items ci
    JOIN skus s ON s.id = ci.sku_id
    WHERE ci.user_id = ${dbUser.id}
  `;

  if (cartItems.length === 0) {
    return NextResponse.json({ error: 'Cart is empty' }, { status: 400 });
  }

  const totalAmount = cartItems.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0);

  const orderRows = await sql`
    INSERT INTO orders (buyer_id, total_amount, status, payment_status, shipping_address)
    VALUES (${dbUser.id}, ${totalAmount}, 'pending', 'unpaid', ${shipping_address})
    RETURNING *
  `;
  const order = orderRows[0];

  const insertedItems: Record<string, unknown>[] = [];
  for (const item of cartItems) {
    const rows = await sql`
      INSERT INTO order_items (order_id, sku_id, quantity, price_at_purchase)
      VALUES (${order.id}, ${item.sku_id}, ${item.quantity}, ${item.price})
      RETURNING *
    `;
    insertedItems.push(rows[0]);
  }

  await sql`DELETE FROM cart_items WHERE user_id = ${dbUser.id}`;

  return NextResponse.json({ order: { ...order, order_items: insertedItems } }, { status: 201 });
}
