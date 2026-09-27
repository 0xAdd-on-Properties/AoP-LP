-- Run once against your Neon database.
-- Adds a platform-admin flag (orthogonal to the persona `role` — an admin
-- can also be e.g. a dealer_broker) and a curated directory of established
-- materials suppliers, seeded by research rather than user-submitted, so it
-- can be reviewed/verified before going live to buyers.

ALTER TABLE users
  ADD COLUMN is_admin BOOLEAN NOT NULL DEFAULT false;

CREATE TABLE IF NOT EXISTS supplier_directory (
  id                SERIAL PRIMARY KEY,
  name              TEXT NOT NULL,
  category          TEXT NOT NULL,
  scope             TEXT NOT NULL CHECK (scope IN ('vizag', 'andhra', 'india', 'world')),
  city              TEXT,
  state             TEXT,
  country           TEXT NOT NULL DEFAULT 'India',
  description       TEXT,
  website           TEXT,
  founded_year      INTEGER,
  verified          BOOLEAN NOT NULL DEFAULT false,
  claimed_by_sku_id INTEGER REFERENCES skus(id) ON DELETE SET NULL,
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_supplier_directory_scope ON supplier_directory(scope);
CREATE INDEX idx_supplier_directory_category ON supplier_directory(category);
