# HDPS Dynamic Backend Prototype

This folder is the dynamic layer for the existing GitHub Pages front-end. The approved public landing page and the four language editions stay unchanged visually.

## What this prototype adds

- `POST /api/access` — records access events.
- `GET /api/me` — placeholder for future HR/SSO identity lookup.
- `POST /api/master/login` — server-side MASTER authentication.
- `POST /api/master/change-code` — changes the MASTER code for all devices using the same backend.
- `GET /api/analytics` — returns unique-user and utilization statistics.

## Run locally

Requires Node.js 20+.

1. Generate a salt/hash for the MASTER code:
   `node hash-code.mjs`
2. Set environment variables:
   - `MASTER_NAME`
   - `MASTER_CODE_SALT`
   - `MASTER_CODE_HASH`
   - `TOKEN_SECRET` (long random secret)
   - `TOTAL_HEADCOUNT` (optional prototype denominator)
3. Run:
   `node server.mjs`
4. Set `/dynamic-config.js` `apiBaseUrl` to the server URL.

## Production migration

`backend/server.mjs` currently stores prototype access data and changed credentials in `backend/data/runtime.json`. This is suitable only for a single persistent prototype server. For production, replace that storage adapter with Azure SQL/Cosmos DB and replace `/api/me` with Entra ID / company SSO + HR DB lookup.

Recommended production flow:

`GitHub Pages -> Entra ID / company SSO -> API -> HR DB + Access Log DB`

The HR table should provide at least: employee id, name, plant, department, position, employment status, and role. Access logs should use employee id as the unique key so repeat visits can be removed when calculating department utilization.

**Utilization rate** = unique users in selected period / active HR headcount for that organization * 100.

Do not commit raw MASTER codes, HR data, tokens, or production database credentials to this repository.
