-- Run once against your Neon database to create the users table.
CREATE TABLE IF NOT EXISTS users (
  id             SERIAL PRIMARY KEY,
  stack_user_id  TEXT    NOT NULL UNIQUE,
  email          TEXT,
  display_name   TEXT,
  created_at     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at     TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
