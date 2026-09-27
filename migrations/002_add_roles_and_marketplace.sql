-- Run once against your Neon database.
-- Adds persona/role support and the core tables for property listings,
-- builder projects, construction/interior quotation requests, materials
-- SKUs, and cart/order checkout (payment provider wiring left inert until
-- Razorpay is turned on).

CREATE TYPE user_role AS ENUM (
  'general_user',
  'investor',
  'dealer_broker',
  'builder',
  'materials_supplier',
  'service_provider'
);

ALTER TABLE users
  ADD COLUMN role user_role,
  ADD COLUMN phone TEXT,
  ADD COLUMN company_name TEXT;

-- Builder projects (a project groups many units/properties together)
CREATE TABLE IF NOT EXISTS projects (
  id              SERIAL PRIMARY KEY,
  builder_id      INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name            TEXT NOT NULL,
  description     TEXT,
  city            TEXT NOT NULL DEFAULT 'Visakhapatnam',
  locality        TEXT,
  status          TEXT NOT NULL DEFAULT 'under_construction'
                    CHECK (status IN ('under_construction', 'ready_to_move', 'completed')),
  possession_date DATE,
  total_units     INTEGER,
  images          JSONB NOT NULL DEFAULT '[]',
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Property listings: dealers/brokers list independently, builders list
-- units under a project (project_id set) or standalone (project_id null).
CREATE TABLE IF NOT EXISTS properties (
  id              SERIAL PRIMARY KEY,
  owner_id        INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  project_id      INTEGER REFERENCES projects(id) ON DELETE SET NULL,
  title           TEXT NOT NULL,
  description     TEXT,
  property_type   TEXT NOT NULL
                    CHECK (property_type IN ('villa', 'apartment', 'house', 'plot', 'commercial', 'builder_floor')),
  listing_type    TEXT NOT NULL CHECK (listing_type IN ('buy', 'rent')),
  status          TEXT NOT NULL DEFAULT 'active'
                    CHECK (status IN ('draft', 'active', 'sold', 'rented', 'inactive')),
  price           NUMERIC(14, 2) NOT NULL,
  city            TEXT NOT NULL DEFAULT 'Visakhapatnam',
  locality        TEXT,
  bedrooms        INTEGER,
  bathrooms       INTEGER,
  area_sqft       NUMERIC(10, 2),
  images          JSONB NOT NULL DEFAULT '[]',
  features        JSONB NOT NULL DEFAULT '[]',
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Inbound interest on a listing (works for anonymous or logged-in visitors)
CREATE TABLE IF NOT EXISTS property_leads (
  id           SERIAL PRIMARY KEY,
  property_id  INTEGER NOT NULL REFERENCES properties(id) ON DELETE CASCADE,
  from_user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
  name         TEXT NOT NULL,
  email        TEXT,
  phone        TEXT,
  message      TEXT,
  status       TEXT NOT NULL DEFAULT 'new'
                 CHECK (status IN ('new', 'contacted', 'converted', 'closed')),
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Construction / interior design quotation requests
CREATE TABLE IF NOT EXISTS quotation_requests (
  id             SERIAL PRIMARY KEY,
  requester_id   INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  service_type   TEXT NOT NULL CHECK (service_type IN ('construction', 'interior_design', 'renovation')),
  title          TEXT NOT NULL,
  description    TEXT,
  budget_min     NUMERIC(14, 2),
  budget_max     NUMERIC(14, 2),
  city           TEXT NOT NULL DEFAULT 'Visakhapatnam',
  locality       TEXT,
  status         TEXT NOT NULL DEFAULT 'open'
                   CHECK (status IN ('open', 'quoted', 'accepted', 'completed', 'cancelled')),
  created_at     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at     TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Quotes a service_provider/builder submits against a request
CREATE TABLE IF NOT EXISTS quotes (
  id                    SERIAL PRIMARY KEY,
  quotation_request_id  INTEGER NOT NULL REFERENCES quotation_requests(id) ON DELETE CASCADE,
  provider_id           INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  amount                NUMERIC(14, 2) NOT NULL,
  message               TEXT,
  status                TEXT NOT NULL DEFAULT 'pending'
                          CHECK (status IN ('pending', 'accepted', 'rejected', 'withdrawn')),
  created_at            TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (quotation_request_id, provider_id)
);

-- Materials/wholesale SKUs
CREATE TABLE IF NOT EXISTS skus (
  id             SERIAL PRIMARY KEY,
  supplier_id    INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name           TEXT NOT NULL,
  description    TEXT,
  category       TEXT NOT NULL,
  price          NUMERIC(12, 2) NOT NULL,
  unit           TEXT NOT NULL DEFAULT 'unit',
  stock_quantity INTEGER NOT NULL DEFAULT 0,
  images         JSONB NOT NULL DEFAULT '[]',
  status         TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'inactive')),
  created_at     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at     TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS cart_items (
  id         SERIAL PRIMARY KEY,
  user_id    INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  sku_id     INTEGER NOT NULL REFERENCES skus(id) ON DELETE CASCADE,
  quantity   INTEGER NOT NULL DEFAULT 1 CHECK (quantity > 0),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (user_id, sku_id)
);

CREATE TABLE IF NOT EXISTS orders (
  id               SERIAL PRIMARY KEY,
  buyer_id         INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  total_amount     NUMERIC(14, 2) NOT NULL,
  status           TEXT NOT NULL DEFAULT 'pending'
                     CHECK (status IN ('pending', 'confirmed', 'fulfilled', 'cancelled')),
  -- Payment wiring stubbed: no provider is live yet, this just records intent.
  payment_provider TEXT,
  payment_status   TEXT NOT NULL DEFAULT 'unpaid' CHECK (payment_status IN ('unpaid', 'paid', 'refunded')),
  shipping_address TEXT,
  created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS order_items (
  id                 SERIAL PRIMARY KEY,
  order_id           INTEGER NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  sku_id             INTEGER NOT NULL REFERENCES skus(id) ON DELETE RESTRICT,
  quantity           INTEGER NOT NULL CHECK (quantity > 0),
  price_at_purchase  NUMERIC(12, 2) NOT NULL
);

CREATE INDEX idx_properties_owner ON properties(owner_id);
CREATE INDEX idx_properties_city_status ON properties(city, status);
CREATE INDEX idx_projects_builder ON projects(builder_id);
CREATE INDEX idx_quotation_requests_requester ON quotation_requests(requester_id);
CREATE INDEX idx_quotes_request ON quotes(quotation_request_id);
CREATE INDEX idx_skus_supplier ON skus(supplier_id);
CREATE INDEX idx_cart_items_user ON cart_items(user_id);
CREATE INDEX idx_orders_buyer ON orders(buyer_id);
CREATE INDEX idx_order_items_order ON order_items(order_id);
