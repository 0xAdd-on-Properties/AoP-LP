-- Run once against your Neon database.
-- Generic lead-capture for standalone service pages (architects directory,
-- mortgage financing, etc.) that aren't tied to a specific property row,
-- unlike property_leads.

CREATE TABLE IF NOT EXISTS service_leads (
  id           SERIAL PRIMARY KEY,
  lead_type    TEXT NOT NULL,
  name         TEXT NOT NULL,
  email        TEXT,
  phone        TEXT,
  city         TEXT,
  message      TEXT,
  metadata     JSONB,
  status       TEXT NOT NULL DEFAULT 'new'
                 CHECK (status IN ('new', 'contacted', 'converted', 'closed')),
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_service_leads_lead_type ON service_leads(lead_type);
