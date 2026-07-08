-- Phase 5: webhook idempotency
-- Records processed Stripe event IDs so duplicate deliveries are ignored.
CREATE TABLE IF NOT EXISTS stripe_events (
  id           TEXT PRIMARY KEY,
  type         TEXT NOT NULL,
  processed_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Only the service role (which bypasses RLS) writes here; enable RLS with no
-- policies so no anon/authenticated access is possible.
ALTER TABLE stripe_events ENABLE ROW LEVEL SECURITY;
