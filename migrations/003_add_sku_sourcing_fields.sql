-- Run once against your Neon database.
-- Adds sustainability/sourcing transparency fields to skus: whether the
-- material is made in India, where it's imported from otherwise, whether
-- it's sold wholesale (B2B), retail (B2C), or both, and a free-text
-- sourcing story suppliers can use to explain their supply chain.

ALTER TABLE skus
  ADD COLUMN made_in_india BOOLEAN NOT NULL DEFAULT true,
  ADD COLUMN origin_country TEXT,
  ADD COLUMN sale_type TEXT NOT NULL DEFAULT 'b2c_retail'
    CHECK (sale_type IN ('b2b_wholesale', 'b2c_retail', 'both')),
  ADD COLUMN sourcing_story TEXT;
