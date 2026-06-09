# Moksha Voyage

Premium global platform scaffold for funeral services, international repatriation, spiritual care, travel assistance, digital memorials, family support, CRM, operations, communications, analytics, and admin CMS.

## Current Build

- Next.js 15 App Router frontend with TypeScript and Tailwind CSS.
- Public homepage with service pillars, global markets, process flow, packages, and intake CTA.
- Service detail pages generated from structured platform data.
- Family portal dashboard with case timeline, documents, payments, messages, and coordinator context.
- Admin operations dashboard covering CRM, case management, CMS, automations, roles, and quality signals.
- `/api/platform` route exposing the CMS-ready public data shape.
- Express/Mongoose backend scaffold for leads, cases, CMS pages, users, RBAC-ready roles, documents, timelines, and task operations.

## Run Frontend

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment

The project now includes `.env` and `.env.example`.

Important groups are already centralized there:

- App URLs: `NEXT_PUBLIC_APP_URL`, `NEXT_PUBLIC_API_URL`
- API server: `API_PORT`, `API_HOST`, `JSON_BODY_LIMIT`, `TRUST_PROXY`
- CORS: `WEB_ORIGIN`, `CORS_ALLOWED_ORIGINS`
- Database: `MONGODB_URI`
- Auth: `JWT_ACCESS_SECRET`, `JWT_REFRESH_SECRET`, token expiry, password salt rounds
- Storage: Cloudinary and document/PDF provider keys
- Communication: SMTP and WhatsApp API settings
- Payments, analytics, support contact, and operations defaults

## Run API

```bash
npm run api:dev
```

## Product Direction

The architecture is intentionally CMS-driven. Public content, media, menus, page sections, service pages, country/city pages, SEO metadata, case workflows, and communication templates should move from seeded data into admin-managed APIs as the product matures.
