# HDPS Digital Library

Four-language HDPS promotional digital library with a preserved GitHub Pages front-end and a backend-ready dynamic architecture.

- Publisher: Operation Excellence Team · 서지철 / Jicheol Seoh
- Publication date: 2026.08.20
- Languages: Korean, English, Portuguese, Simplified Chinese
- Public readers: no name/password input at the current prototype stage
- MASTER console: `/admin/`
- Dynamic API adapter: `/hdps-api.js`
- Runtime API configuration: `/dynamic-config.js`
- Dynamic backend prototype: `/backend/`

## Dynamic target architecture

`GitHub Pages -> company SSO / Entra ID -> HDPS API -> HR DB + Access Log DB`

The approved landing-page design remains the public front-end. When `dynamic-config.js` receives a deployed `apiBaseUrl`, the front-end can send landing/edition access events to the API without redesigning the page.

The backend prototype includes server-side MASTER authentication, cross-device MASTER code changes, access logging, unique-user statistics and utilization calculation. For production, replace the prototype file store with Azure SQL/Cosmos DB and connect `/api/me` to company SSO/HR data.

**Department utilization** = unique users in the selected period / active HR headcount for that department × 100.

Do not commit HR records, raw MASTER security codes, API tokens, or production database credentials.

© 2026. Unauthorized reproduction and distribution prohibited.
