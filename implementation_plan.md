# Moksha Voyage — Complete Implementation Plan

## Overview

**Current Status:** ~4–5% complete. Skeleton exists. Real platform not yet built.  
**Stack:** Next.js 15 App Router · TypeScript · Tailwind CSS · Shadcn UI · Express · MongoDB · Mongoose · JWT · Cloudinary  
**Design System Already Set:** Colors (canvas, ink, gold, ocean, line), Fonts (Inter + Playfair Display), Shadows  

> [!IMPORTANT]
> All phases are additive. Nothing existing will be broken. New folders and files are added on top of the current foundation.

---

## Phase Roadmap Summary

| Phase | Focus | Est. Effort |
|---|---|---|
| 1 | Fix Dev + Shadcn + Design System + Component Library | 2–3 days |
| 2 | Homepage (Dynamic) + All Public Pages | 3–4 days |
| 3 | Auth System (Backend + Frontend) | 2–3 days |
| 4 | Admin Panel — Core Layout + CMS Modules | 4–5 days |
| 5 | CRM System | 3 days |
| 6 | Case Management & Operations | 3–4 days |
| 7 | Family Portal (Authenticated) | 3 days |
| 8 | Communication Hub (Email + WhatsApp) | 2–3 days |
| 9 | Digital Memorial Platform | 3 days |
| 10 | Advanced Admin (Page Builder, Menu, Gallery) | 3–4 days |
| 11 | Analytics, SEO, Performance, Launch | 2–3 days |

---

---

## PHASE 1 — Fix Dev Server + Shadcn UI + Design System + Component Library

> **Goal:** Stable dev environment. Full design system. Reusable components for all future phases.

### 1.1 Fix Dev Server Error

#### [MODIFY] `.next/` (delete and recreate)
- Delete `.next` folder → restart `npm run dev`
- Root cause: webpack cache pack file corruption

### 1.2 Install Shadcn UI

- Run: `npx shadcn@latest init`
- Configure with: TypeScript, Tailwind, App Router
- Install components: Button, Input, Label, Card, Badge, Dialog, Sheet, Select, Table, Tabs, Toast, Dropdown, Avatar, Separator, Skeleton, Switch, Textarea, Tooltip

### 1.3 Design System — Full Token Setup

#### [MODIFY] [tailwind.config.ts](file:///d:/moksha%20voyage/tailwind.config.ts)
- Add full color palette (all blueprint colors)
- Add spacing scale tokens
- Add border radius tokens
- Add animation tokens (fade, slide)
- Add typography scale

#### [MODIFY] [app/globals.css](file:///d:/moksha%20voyage/app/globals.css)
- CSS custom properties for design tokens
- Typography defaults
- Smooth scroll
- Focus ring styles
- Animation keyframes (fade-in, slide-up, slide-in)

### 1.4 Component Library

#### [NEW] `components/ui/` — Shadcn auto-generated
All Shadcn components output here automatically.

#### [NEW] `components/shared/`
- [NEW] `logo.tsx` — LogoMark component (extracted from page.tsx)
- [NEW] `section-header.tsx` — Reusable section title + subtitle
- [NEW] `stat-card.tsx` — Stat display (number + label + icon)
- [NEW] `service-card.tsx` — Service card with icon + title + description
- [NEW] `testimonial-card.tsx` — Testimonial with stars + quote + name
- [NEW] `resource-card.tsx` — Blog/resource card with image + tag
- [NEW] `country-badge.tsx` — Country display pill
- [NEW] `cta-banner.tsx` — Emergency/CTA section
- [NEW] `page-header.tsx` — Inner page hero/header
- [NEW] `breadcrumb.tsx` — Breadcrumb navigation
- [NEW] `empty-state.tsx` — Empty state with icon + message
- [NEW] `loading-spinner.tsx` — Loading states
- [NEW] `error-boundary.tsx` — Error fallback UI

#### [MODIFY] `components/site-shell.tsx`
- Add full sticky header with mega menu
- Add mobile hamburger menu (Sheet from Shadcn)
- Add top announcement bar
- Add language selector
- Add WhatsApp quick link

#### [NEW] `components/footer.tsx`
- Full footer with 4 columns
- Newsletter signup
- Social links
- Legal links
- Back to top button

#### [NEW] `lib/api-client.ts`
- Centralized fetch wrapper
- Token injection
- Error handling
- Retry logic

#### [NEW] `lib/hooks/`
- [NEW] `use-toast.ts`
- [NEW] `use-media-query.ts`
- [NEW] `use-debounce.ts`
- [NEW] `use-local-storage.ts`

---

---

## PHASE 2 — Homepage (Dynamic) + All Public-Facing Pages

> **Goal:** All public pages built, API-driven, SEO-ready.

### 2.1 Backend — Content APIs

#### [MODIFY] `backend/server.ts`
- Add routes for Services, Testimonials, FAQs, Blog, Resources, Countries

#### [NEW] `backend/src/models/service.ts`
```
Fields: title, slug, category, description, shortDescription,
icon, features[], image, seoTitle, seoDescription, status,
sortOrder, isFeatured, country[], city[]
```

#### [NEW] `backend/src/models/testimonial.ts`
```
Fields: name, location, country, text, rating, serviceType,
image, isFeatured, status, sortOrder
```

#### [NEW] `backend/src/models/faq.ts`
```
Fields: question, answer, category, sortOrder, status, isPopular
```

#### [NEW] `backend/src/models/blog.ts`
```
Fields: title, slug, excerpt, content, featuredImage, category,
tags[], author, status, publishedAt, seoTitle, seoDescription,
readTime, isFeatured
```

#### [NEW] `backend/src/models/resource.ts`
```
Fields: title, slug, type (article/video/guide/podcast/ebook),
description, content, thumbnail, downloadUrl, category,
status, isFeatured, sortOrder
```

#### [NEW] `backend/src/models/country.ts`
```
Fields: name, slug, code, flag, description, services[],
documents[], timeline, popularCities[], isActive, sortOrder,
seoTitle, seoDescription, heroImage
```

#### [NEW] `backend/src/models/package.ts`
```
Fields: name, slug, description, price, priceType
(custom/fixed/range), items[], badge, isPopular, sortOrder,
status, countriesAvailable[]
```

#### [NEW] `backend/src/routes/` (split server.ts into modules)
- [NEW] `services.routes.ts` — CRUD
- [NEW] `testimonials.routes.ts` — CRUD
- [NEW] `faqs.routes.ts` — CRUD
- [NEW] `blog.routes.ts` — CRUD
- [NEW] `resources.routes.ts` — CRUD
- [NEW] `countries.routes.ts` — CRUD
- [NEW] `packages.routes.ts` — CRUD

### 2.2 Next.js API Routes (Proxy Layer)

#### [NEW] `app/api/services/route.ts` — GET list
#### [NEW] `app/api/services/[slug]/route.ts` — GET by slug
#### [NEW] `app/api/testimonials/route.ts`
#### [NEW] `app/api/faqs/route.ts`
#### [NEW] `app/api/blog/route.ts`
#### [NEW] `app/api/blog/[slug]/route.ts`
#### [NEW] `app/api/resources/route.ts`
#### [NEW] `app/api/countries/route.ts`
#### [NEW] `app/api/countries/[slug]/route.ts`
#### [NEW] `app/api/packages/route.ts`
#### [NEW] `app/api/leads/route.ts` (move from platform route)

### 2.3 Public Pages

#### [MODIFY] `app/page.tsx` (Homepage)
- Replace static data with API calls (TanStack Query)
- Dynamic services grid from API
- Dynamic testimonials carousel (real auto-scroll)
- Dynamic resources from API
- Real lead capture form (React Hook Form + Zod)
- WhatsApp floating button
- Emergency modal
- Cookie consent banner

#### [NEW] `app/services/page.tsx`
- All services listing
- Filter by category
- Search
- Grid + List view

#### [MODIFY] `app/services/[slug]/page.tsx` (folder exists)
- Dynamic service detail page
- Features list
- Related services
- Lead capture CTA
- FAQ accordion for this service
- Related blog posts

#### [NEW] `app/international/page.tsx`
- International repatriation landing
- Country-wise info
- Document checklist
- Process timeline
- CTA

#### [NEW] `app/spiritual/page.tsx`
- Spiritual services listing
- Pandit booking CTA
- Ritual calendar
- Online services section

#### [NEW] `app/travel/page.tsx`
- Travel & hospitality page
- Emergency flight booking
- Hotel accommodation
- Airport transfers

#### [NEW] `app/countries/page.tsx`
- Countries we serve — grid
- Each country card with services

#### [NEW] `app/countries/[slug]/page.tsx`
- Country-specific page
- Services available
- Documents required
- Process steps
- Local team info
- City links

#### [NEW] `app/about/page.tsx`
- Company story
- Mission & values
- Team section
- Why choose us
- Awards / trust signals

#### [NEW] `app/contact/page.tsx`
- Contact form (full)
- Office locations
- WhatsApp / Phone / Email
- Map embed
- FAQ quick links

#### [NEW] `app/blog/page.tsx`
- Blog listing
- Category filter
- Search
- Featured article
- Pagination

#### [NEW] `app/blog/[slug]/page.tsx`
- Full blog post
- Author info
- Related posts
- Social share
- Comments placeholder

#### [NEW] `app/resources/page.tsx`
- Resource center
- Filter by type (article, video, guide, ebook)
- Download links
- Featured resources

#### [NEW] `app/faqs/page.tsx`
- FAQ by category accordion
- Search FAQs
- CTA to contact

#### [NEW] `app/packages/page.tsx`
- All packages
- Comparison table
- CTA for quote

#### [NEW] `app/privacy-policy/page.tsx`
#### [NEW] `app/terms/page.tsx`
#### [NEW] `app/sitemap.ts` — Dynamic XML sitemap
#### [NEW] `app/robots.ts` — Robots.txt

---

---

## PHASE 3 — Authentication System

> **Goal:** JWT-based Auth. RBAC. Protected routes. Login/register pages.

### 3.1 Backend Auth

#### [MODIFY] `backend/src/models/user.ts`
- Add `refreshToken` field
- Add `loginHistory[]` (IP, timestamp, device)
- Add `passwordResetToken`, `passwordResetExpiry`
- Add `emailVerified` boolean

#### [NEW] `backend/src/routes/auth.routes.ts`
- `POST /api/auth/register` — Admin creates user
- `POST /api/auth/login` — Returns access + refresh token
- `POST /api/auth/refresh` — Refresh access token
- `POST /api/auth/logout` — Invalidate refresh token
- `POST /api/auth/forgot-password`
- `POST /api/auth/reset-password`
- `GET /api/auth/me` — Get current user profile

#### [NEW] `backend/src/middleware/`
- [NEW] `authenticate.ts` — JWT verification middleware
- [NEW] `authorize.ts` — Role/permission check middleware
- [NEW] `rate-limit.ts` — Login rate limiting

### 3.2 Next.js Auth Integration

#### [NEW] `app/api/auth/login/route.ts`
#### [NEW] `app/api/auth/logout/route.ts`
#### [NEW] `app/api/auth/refresh/route.ts`
#### [NEW] `app/api/auth/me/route.ts`

#### [NEW] `lib/auth/`
- [NEW] `auth-context.tsx` — React context for auth state
- [NEW] `use-auth.ts` — Hook for current user + actions
- [NEW] `token-manager.ts` — Secure token storage + refresh logic
- [NEW] `permissions.ts` — Permission constants

#### [NEW] `app/(auth)/layout.tsx` — Auth pages layout (clean, centered)
#### [NEW] `app/(auth)/login/page.tsx` — Login form
#### [NEW] `app/(auth)/forgot-password/page.tsx`
#### [NEW] `app/(auth)/reset-password/page.tsx`

#### [NEW] `middleware.ts` (Next.js root)
- Protect `/admin/*` routes — redirect if not logged in
- Protect `/portal/*` routes — redirect if not family user
- Role-check for admin modules

---

---

## PHASE 4 — Admin Panel — Core + All CMS Modules

> **Goal:** Fully functional admin panel. Every content section manageable from UI.

### 4.1 Admin Layout

#### [NEW] `app/admin/layout.tsx`
- Sidebar navigation (collapsible)
- Top bar with user menu + notifications
- Breadcrumb
- Mobile-responsive sidebar (Sheet)

#### [NEW] `app/admin/page.tsx` (replace stub)
- Real stats from API
- Today's cases
- Urgent cases
- Revenue overview
- Recent leads
- Pending tasks

#### [NEW] `components/admin/`
- [NEW] `admin-sidebar.tsx` — Full sidebar with module groups
- [NEW] `admin-topbar.tsx` — Search + notifications + user menu
- [NEW] `data-table.tsx` — Reusable table with sort, filter, pagination
- [NEW] `form-section.tsx` — Admin form layout wrapper
- [NEW] `media-picker.tsx` — Cloudinary media picker
- [NEW] `rich-text-editor.tsx` — TipTap or Quill editor
- [NEW] `status-badge.tsx` — Status pills (active/draft/published)
- [NEW] `confirm-dialog.tsx` — Delete/action confirmation

### 4.2 Users & Roles Management

#### [NEW] `backend/src/models/role.ts`
```
Fields: name, slug, permissions[], description, isSystem
```

#### [NEW] `backend/src/routes/users.routes.ts`
- GET `/api/admin/users` — List with filters
- POST `/api/admin/users` — Create user
- PATCH `/api/admin/users/:id` — Update
- DELETE `/api/admin/users/:id`
- POST `/api/admin/users/:id/reset-password`
- GET `/api/admin/users/:id/activity`

#### [NEW] `backend/src/routes/roles.routes.ts`
- Full CRUD for roles
- GET permissions list

#### [NEW] `app/admin/users/page.tsx` — Users table + invite form
#### [NEW] `app/admin/users/[id]/page.tsx` — User detail + edit
#### [NEW] `app/admin/roles/page.tsx` — Roles list
#### [NEW] `app/admin/roles/[id]/page.tsx` — Role editor with permissions checkboxes

### 4.3 Services CMS

#### [MODIFY] `backend/src/models/service.ts` (from Phase 2)
#### [NEW] `app/admin/services/page.tsx` — Services list table
#### [NEW] `app/admin/services/new/page.tsx` — Create service form
#### [NEW] `app/admin/services/[id]/page.tsx` — Edit service form

**Form fields:** Title, Slug (auto), Category, Short description, Full description (rich text), Icon picker, Features list (add/remove), Gallery, SEO fields, Countries, Status, Sort order, Featured toggle

### 4.4 Packages Management

#### [NEW] `app/admin/packages/page.tsx`
#### [NEW] `app/admin/packages/new/page.tsx`
#### [NEW] `app/admin/packages/[id]/page.tsx`

### 4.5 Countries & Cities Management

#### [NEW] `backend/src/models/city.ts`
```
Fields: name, slug, country, description, services[], isActive, sortOrder
```

#### [NEW] `app/admin/countries/page.tsx`
#### [NEW] `app/admin/countries/[id]/page.tsx`
#### [NEW] `app/admin/cities/page.tsx`
#### [NEW] `app/admin/cities/[id]/page.tsx`

### 4.6 Blog CMS

#### [NEW] `app/admin/blog/page.tsx` — Posts table
#### [NEW] `app/admin/blog/new/page.tsx` — Post editor
#### [NEW] `app/admin/blog/[id]/page.tsx` — Edit post
#### [NEW] `app/admin/blog/categories/page.tsx`

**Editor:** Rich text (TipTap), featured image, category, tags, author, publish date, SEO panel, version history toggle

### 4.7 Resources CMS

#### [NEW] `app/admin/resources/page.tsx`
#### [NEW] `app/admin/resources/new/page.tsx`
#### [NEW] `app/admin/resources/[id]/page.tsx`

### 4.8 Testimonials Management

#### [NEW] `app/admin/testimonials/page.tsx`
#### [NEW] `app/admin/testimonials/new/page.tsx`
#### [NEW] `app/admin/testimonials/[id]/page.tsx`

### 4.9 FAQ Management

#### [NEW] `app/admin/faqs/page.tsx`
#### [NEW] `app/admin/faqs/new/page.tsx`
#### [NEW] `app/admin/faqs/[id]/page.tsx`

### 4.10 Homepage CMS

#### [NEW] `backend/src/models/site-settings.ts`
```
Fields: heroTitle, heroSubtitle, heroImage, stats[], trustSection,
ctaTitle, ctaSubtitle, announcementBar, socialLinks, contactInfo
```

#### [NEW] `app/admin/homepage/page.tsx`
- Section-by-section editor for homepage
- Hero content editor
- Stats editor
- Trust section editor
- CTA editor

### 4.11 Gallery CMS

#### [NEW] `backend/src/models/media.ts`
```
Fields: url, publicId, type (image/video), altText, caption,
aspectRatio, focusPoint, tags[], folder, uploadedBy, size
```

#### [NEW] `app/admin/gallery/page.tsx` — Media library (grid)
#### [NEW] `app/admin/gallery/upload/page.tsx` — Cloudinary upload UI

### 4.12 SEO Management

#### [NEW] `backend/src/models/seo.ts`
```
Fields: entityType (page/service/blog/country), entityId, slug,
metaTitle, metaDescription, keywords, ogImage, canonical,
noIndex, schemaMarkup
```

#### [NEW] `app/admin/seo/page.tsx` — SEO overview table
#### [NEW] `app/admin/seo/[id]/page.tsx` — Edit SEO for any entity

### 4.13 Menu Builder

#### [NEW] `backend/src/models/menu.ts`
```
Fields: location (header/footer), items[] (label, href, children[], isExternal, isCTA)
```

#### [NEW] `app/admin/menus/page.tsx` — Menu builder with drag-and-drop
#### [NEW] `app/admin/menus/[location]/page.tsx` — Edit specific menu

### 4.14 Footer Builder

#### [NEW] `app/admin/footer/page.tsx`
- Column editor
- Quick links manager
- Contact info editor
- Social links editor
- Copyright text

---

---

## PHASE 5 — CRM System

> **Goal:** Full lead management + pipeline board + lead detail.

### 5.1 Backend

#### [MODIFY] `backend/src/models/lead.ts`
```
Add: assignedTo, tags[], notes[], activityLog[], pipeline stage,
followUpDate, quoteAmount, source (extended), priority
```

#### [NEW] `backend/src/routes/crm.routes.ts`
- GET `/api/crm/leads` — List with filters, search, pagination
- POST `/api/crm/leads` — Create
- GET `/api/crm/leads/:id` — Detail with timeline
- PATCH `/api/crm/leads/:id` — Update fields
- PATCH `/api/crm/leads/:id/stage` — Move pipeline stage
- POST `/api/crm/leads/:id/notes` — Add note
- POST `/api/crm/leads/:id/activity` — Log activity
- POST `/api/crm/leads/:id/convert` — Convert to Case
- GET `/api/crm/stats` — Pipeline stats

### 5.2 Frontend

#### [NEW] `app/admin/crm/page.tsx`
- Dashboard: Pipeline counts, conversion rate, today's follow-ups
- Recent leads table
- Quick add lead button

#### [NEW] `app/admin/crm/leads/page.tsx`
- Full leads table with:
  - Search + Filter (stage, source, country, priority, date range)
  - Bulk actions (assign, change stage, export)
  - Pagination
  - Column sort

#### [NEW] `app/admin/crm/pipeline/page.tsx`
- Kanban board view
- Columns: New → Contacted → Qualified → Proposal Sent → Negotiation → Booked → Completed / Lost
- Drag cards between columns (using @dnd-kit)
- Card shows: name, phone, service, urgency, days in stage

#### [NEW] `app/admin/crm/leads/[id]/page.tsx`
- Lead detail header (name, phone, country, service, urgency badge)
- Pipeline stage selector
- Activity timeline (call log, notes, emails, WhatsApp)
- Add note form
- Documents section
- Quote builder
- Convert to Case button
- Assign coordinator dropdown

---

---

## PHASE 6 — Case Management & Operations Dashboard

> **Goal:** Full operational case management for the ops team.

### 6.1 Backend

#### [MODIFY] `backend/src/models/case.ts`
```
Add: caseNumber, status, priority, leadId, family (name, phone, country),
deceased (name, age, deathDate, deathCountry, destinationCountry),
services[], coordinator, team[], timeline[], documents[],
tasks[], internalNotes[], payments[], embassyStatus,
airportStatus, flightDetails, estimatedCompletion, closedAt
```

#### [NEW] `backend/src/models/task.ts`
```
Fields: caseId, title, description, assignedTo, dueDate,
priority, status, completedAt, completedBy, attachments[]
```

#### [NEW] `backend/src/models/document.ts`
```
Fields: caseId, name, type, url, publicId, status
(pending/uploaded/verified/rejected), uploadedBy, verifiedBy,
rejectionReason, isRequired, dueDate
```

#### [NEW] `backend/src/routes/cases.routes.ts`
- Full CRUD with filters
- GET `/api/cases/:id` — Full case with all relations
- POST `/api/cases/:id/timeline` — Add timeline event
- POST `/api/cases/:id/tasks` — Add task
- PATCH `/api/cases/:id/tasks/:taskId`
- POST `/api/cases/:id/notes` — Internal note
- POST `/api/cases/:id/documents` — Upload document
- PATCH `/api/cases/:id/documents/:docId/verify`
- GET `/api/operations/dashboard` — Today's ops stats

### 6.2 Frontend

#### [NEW] `app/admin/operations/page.tsx`
- Operations command center
- Today's cases (urgent first)
- Pending documents
- Embassy clearances status
- Airport clearances
- Today's flights
- Upcoming rituals
- Pending payments
- Real-time updates

#### [NEW] `app/admin/cases/page.tsx`
- Cases table with full filter
- Search by case number, name, country
- Filter: status, priority, service type, coordinator
- Sort by: created date, urgency, updated

#### [NEW] `app/admin/cases/new/page.tsx`
- Create case from lead (auto-populate)
- Or create fresh
- Service selection
- Family details
- Deceased details

#### [NEW] `app/admin/cases/[id]/page.tsx`
- Full case management hub
- **Header:** Case number, status, priority, coordinator
- **Tabs:**
  - Overview (details, team, timeline)
  - Tasks (board or list, assign, due dates)
  - Documents (upload, verify, reject)
  - Notes (internal team notes)
  - Communication (email/WhatsApp history)
  - Payments (invoices, payment status)
  - Flight & Logistics (airline, cargo, airport)

---

---

## PHASE 7 — Family Portal (Authenticated)

> **Goal:** Real, secure family portal — login, case tracking, docs, payments, messages.

### 7.1 Backend

#### [NEW] `backend/src/routes/portal.routes.ts`
- `POST /api/portal/login` — Family member login (case number + OTP or password)
- `GET /api/portal/case` — Get their case (authenticated)
- `GET /api/portal/case/timeline`
- `GET /api/portal/case/documents`
- `POST /api/portal/case/documents/:id/upload`
- `GET /api/portal/case/payments`
- `GET /api/portal/case/messages`
- `POST /api/portal/case/messages` — Send message to coordinator
- `GET /api/portal/case/downloads`

### 7.2 Frontend

#### [NEW] `app/(portal)/layout.tsx` — Portal layout (clean, family-focused)
#### [MODIFY] `app/portal/page.tsx` — Replace stub with real auth check

#### [NEW] `app/portal/login/page.tsx`
- Case number input + verification
- OTP-based or password login
- Trusted device option

#### [NEW] `app/portal/[caseId]/page.tsx` — Case dashboard
#### [NEW] `app/portal/[caseId]/documents/page.tsx` — Upload + download
#### [NEW] `app/portal/[caseId]/payments/page.tsx` — Invoice + payment history
#### [NEW] `app/portal/[caseId]/messages/page.tsx` — Chat with coordinator
#### [NEW] `app/portal/[caseId]/timeline/page.tsx` — Full timeline
#### [NEW] `app/portal/[caseId]/support/page.tsx` — Support request form

---

---

## PHASE 8 — Communication Hub (Email + WhatsApp)

> **Goal:** SMTP email + WhatsApp automations working end-to-end.

### 8.1 Backend

#### [NEW] `backend/src/models/communication-log.ts`
```
Fields: caseId, leadId, type (email/whatsapp/sms/call),
direction (inbound/outbound), to, from, subject, body,
template, status, sentAt, readAt, metadata
```

#### [NEW] `backend/src/services/email.service.ts`
- SMTP via Nodemailer
- Template rendering (Handlebars or MJML)
- Email queue system

#### [NEW] `backend/src/services/whatsapp.service.ts`
- WhatsApp Business API integration
- Template message sending
- Webhook handler for incoming messages

#### [NEW] `backend/src/models/email-template.ts`
```
Fields: name, slug, subject, htmlBody, variables[], category, isActive
```

#### [NEW] `backend/src/routes/communications.routes.ts`
- `GET /api/communications` — All logs
- `POST /api/communications/email/send`
- `POST /api/communications/whatsapp/send`
- `GET /api/communications/templates`
- `POST /api/communications/templates` — CRUD
- `POST /api/webhooks/whatsapp` — Incoming webhook

**Email Templates to build:**
- Welcome / Lead received
- Quote sent
- Booking confirmation
- Invoice
- Payment confirmation
- Document reminder
- Case update
- Case completion
- Feedback request

**WhatsApp Templates:**
- Lead received acknowledgement
- Booking confirmed
- Quote ready
- Payment reminder
- Document reminder
- Case update
- Completion message
- Review request

### 8.2 Frontend Admin

#### [NEW] `app/admin/communications/page.tsx`
- Communication log (filterable by type, case, date)
- Quick send email/WhatsApp form
- Template selector

#### [NEW] `app/admin/communications/templates/page.tsx` — Templates list
#### [NEW] `app/admin/communications/templates/[id]/page.tsx` — Template editor

---

---

## PHASE 9 — Digital Memorial Platform

> **Goal:** Families can create beautiful, lasting digital memorials.

### 9.1 Backend

#### [NEW] `backend/src/models/memorial.ts`
```
Fields: slug, caseId (optional), name, biography, dateOfBirth,
dateOfDeath, profileImage, coverImage, gallery[], videos[],
lifeJourney[], tributes[], condolences[], guestbook[],
privacy (public/private/family), qrCodeUrl, family (owners),
isPublished, views, shareCount
```

#### [NEW] `backend/src/routes/memorials.routes.ts`
- `POST /api/memorials` — Create
- `GET /api/memorials/:slug` — Public view (if published)
- `PUT /api/memorials/:slug` — Edit (authenticated)
- `POST /api/memorials/:slug/condolences` — Add message
- `POST /api/memorials/:slug/tributes` — Add tribute
- `GET /api/memorials/:slug/qr` — Generate QR

### 9.2 Frontend

#### [NEW] `app/memorial/[slug]/page.tsx` — Public memorial page
- Hero: Photo + name + dates
- Biography section
- Life journey timeline
- Photo gallery (lightbox)
- Video gallery
- Tributes from loved ones
- Condolence messages
- Guestbook (add message form)
- Share + QR code
- Tribute video embed

#### [NEW] `app/memorial/create/page.tsx` — Memorial creation wizard
#### [NEW] `app/portal/[caseId]/memorial/page.tsx` — Manage memorial from portal

---

---

## PHASE 10 — Advanced Admin (Page Builder + Menu + Analytics)

> **Goal:** No developer needed. Business team can run the platform fully.

### 10.1 Page Builder

#### [NEW] `backend/src/models/page.ts` (extend existing)
```
Add: sections[] (type, content, media, cta, layout),
versionHistory[], publishedVersion, draftVersion
```

#### [NEW] `app/admin/pages/page.tsx` — All custom pages
#### [NEW] `app/admin/pages/new/page.tsx` — Page builder UI
#### [NEW] `app/admin/pages/[id]/page.tsx` — Edit page
#### [NEW] `app/(cms)/[slug]/page.tsx` — Dynamic CMS page renderer

**Builder Sections:** Hero, Text, Image, Gallery, Services Grid, Testimonials, FAQ, CTA, Stats, Team, Timeline, Contact Form, Embed

### 10.2 Menu Builder

#### [NEW] `app/admin/menus/page.tsx` (enhanced)
- Drag-and-drop menu items
- Mega menu configuration
- CTA button configuration
- Preview panel

### 10.3 Analytics Dashboard

#### [NEW] `backend/src/models/analytics-event.ts`
```
Fields: type, entityId, entityType, userId, ip, country, city,
device, browser, referrer, utm_source, timestamp
```

#### [NEW] `backend/src/routes/analytics.routes.ts`
- Revenue metrics
- Lead sources
- Conversion funnel
- Top services
- Top countries
- Traffic sources

#### [NEW] `app/admin/analytics/page.tsx`
- Revenue chart (monthly/weekly)
- Leads by source (pie chart)
- Conversion funnel
- Top services table
- Top countries map/table
- Recent activity feed

### 10.4 Activity Logs & Audit

#### [NEW] `backend/src/models/audit-log.ts`
```
Fields: action, entityType, entityId, userId, userEmail, ip,
userAgent, before, after, timestamp
```

#### [NEW] `app/admin/activity/page.tsx` — Full audit trail

### 10.5 Settings

#### [NEW] `app/admin/settings/page.tsx`
- General settings (site name, logo, contact info)
- SMTP config test
- WhatsApp API config
- Cloudinary config
- Timezone/locale
- Backup & restore UI

---

---

## PHASE 11 — SEO, Performance, Accessibility & Launch

> **Goal:** Lighthouse 95+. WCAG compliant. Production ready.

### 11.1 SEO

#### [NEW] `app/sitemap.ts` — Dynamic sitemap (services, blogs, countries, memorials)
#### [NEW] `app/robots.ts`
#### [MODIFY] `app/layout.tsx` — Full meta, OG, Twitter cards, JSON-LD

**Per-page schema markup:**
- Organization schema (homepage)
- Service schema (service pages)
- Article schema (blog)
- BreadcrumbList schema (inner pages)
- FAQPage schema (FAQ page)
- LocalBusiness schema

### 11.2 Performance

- Next.js Image Optimization (all images via `next/image`)
- Font preloading (Inter + Playfair)
- Route prefetching
- Suspense boundaries + streaming
- API response caching (Redis-ready or in-memory)
- Static page generation for services, countries, blogs
- ISR (Incremental Static Regeneration) for CMS pages

### 11.3 Accessibility

- Keyboard navigation for all interactive elements
- ARIA labels on icons and buttons
- Focus ring styles
- Skip-to-content link
- Screen reader compatible forms
- Color contrast verification (WCAG AA)

### 11.4 Security Hardening

- Helmet.js headers (already added)
- Rate limiting on all auth routes
- Input sanitization (all forms)
- File upload validation (Cloudinary)
- CORS tightened for production domains
- Environment variable audit
- `.env` secrets rotated before production

### 11.5 Production Config

#### [NEW] `Dockerfile` — Containerized deployment
#### [NEW] `.github/workflows/deploy.yml` — CI/CD pipeline
#### [MODIFY] `next.config.ts` — Production image domains, security headers

---

---

## Full File Tree (Final State)

```
d:\moksha voyage\
├── app/
│   ├── (auth)/
│   │   ├── layout.tsx
│   │   ├── login/page.tsx
│   │   ├── forgot-password/page.tsx
│   │   └── reset-password/page.tsx
│   ├── (portal)/
│   │   └── layout.tsx
│   ├── (cms)/
│   │   └── [slug]/page.tsx
│   ├── admin/
│   │   ├── layout.tsx
│   │   ├── page.tsx (dashboard)
│   │   ├── users/
│   │   ├── roles/
│   │   ├── services/
│   │   ├── packages/
│   │   ├── countries/
│   │   ├── cities/
│   │   ├── homepage/
│   │   ├── pages/
│   │   ├── menus/
│   │   ├── footer/
│   │   ├── blog/
│   │   ├── resources/
│   │   ├── gallery/
│   │   ├── testimonials/
│   │   ├── faqs/
│   │   ├── seo/
│   │   ├── crm/
│   │   │   ├── page.tsx (crm dashboard)
│   │   │   ├── leads/
│   │   │   └── pipeline/
│   │   ├── cases/
│   │   ├── operations/
│   │   ├── communications/
│   │   ├── analytics/
│   │   ├── activity/
│   │   └── settings/
│   ├── api/
│   │   ├── auth/
│   │   ├── services/
│   │   ├── blog/
│   │   ├── resources/
│   │   ├── countries/
│   │   ├── packages/
│   │   ├── leads/
│   │   ├── cases/
│   │   ├── portal/
│   │   ├── memorials/
│   │   └── webhooks/
│   ├── portal/
│   │   ├── page.tsx
│   │   ├── login/
│   │   └── [caseId]/
│   │       ├── page.tsx
│   │       ├── documents/
│   │       ├── payments/
│   │       ├── messages/
│   │       ├── timeline/
│   │       ├── memorial/
│   │       └── support/
│   ├── services/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── international/page.tsx
│   ├── spiritual/page.tsx
│   ├── travel/page.tsx
│   ├── countries/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── memorial/
│   │   ├── [slug]/page.tsx
│   │   └── create/page.tsx
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── resources/page.tsx
│   ├── faqs/page.tsx
│   ├── packages/page.tsx
│   ├── privacy-policy/page.tsx
│   ├── terms/page.tsx
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── page.tsx (homepage)
│   ├── layout.tsx
│   ├── globals.css
│   └── not-found.tsx
├── backend/
│   ├── server.ts
│   └── src/
│       ├── config/env.ts
│       ├── middleware/
│       │   ├── authenticate.ts
│       │   ├── authorize.ts
│       │   └── rate-limit.ts
│       ├── models/
│       │   ├── user.ts ✅
│       │   ├── lead.ts ✅ (extend)
│       │   ├── case.ts ✅ (extend)
│       │   ├── page.ts ✅ (extend)
│       │   ├── role.ts
│       │   ├── service.ts
│       │   ├── package.ts
│       │   ├── blog.ts
│       │   ├── resource.ts
│       │   ├── testimonial.ts
│       │   ├── faq.ts
│       │   ├── country.ts
│       │   ├── city.ts
│       │   ├── memorial.ts
│       │   ├── task.ts
│       │   ├── document.ts
│       │   ├── media.ts
│       │   ├── menu.ts
│       │   ├── seo.ts
│       │   ├── email-template.ts
│       │   ├── communication-log.ts
│       │   ├── site-settings.ts
│       │   ├── audit-log.ts
│       │   └── analytics-event.ts
│       ├── routes/
│       │   ├── auth.routes.ts
│       │   ├── users.routes.ts
│       │   ├── roles.routes.ts
│       │   ├── services.routes.ts
│       │   ├── packages.routes.ts
│       │   ├── blog.routes.ts
│       │   ├── resources.routes.ts
│       │   ├── countries.routes.ts
│       │   ├── faqs.routes.ts
│       │   ├── testimonials.routes.ts
│       │   ├── crm.routes.ts
│       │   ├── cases.routes.ts
│       │   ├── portal.routes.ts
│       │   ├── memorials.routes.ts
│       │   ├── communications.routes.ts
│       │   ├── analytics.routes.ts
│       │   └── admin.routes.ts
│       └── services/
│           ├── email.service.ts
│           ├── whatsapp.service.ts
│           ├── cloudinary.service.ts
│           └── otp.service.ts
├── components/
│   ├── ui/ (Shadcn)
│   ├── shared/
│   ├── admin/
│   └── site-shell.tsx ✅ (extend)
├── lib/
│   ├── api-client.ts
│   ├── auth/
│   ├── hooks/
│   ├── platform-data.ts ✅
│   └── utils.ts ✅
├── middleware.ts
├── tailwind.config.ts ✅
├── next.config.ts ✅
└── .env ✅
```

---

## Verification Plan

### Per Phase Testing
- Each API endpoint tested with Postman/Thunder Client
- Each page rendered correctly on mobile + desktop
- Auth flow tested (login → protected route → logout)
- Form validation tested (valid + invalid data)

### Final Launch Checklist
- [ ] `npm run build` passes with zero errors
- [ ] `npm run typecheck` passes
- [ ] Lighthouse score ≥ 95 on homepage + service pages
- [ ] All admin CRUD operations working
- [ ] Auth + RBAC tested across all roles
- [ ] Email sending verified in production
- [ ] WhatsApp templates approved on Business API
- [ ] Cloudinary upload/display working
- [ ] Mobile responsiveness on 5 devices
- [ ] All public pages have meta title + description
- [ ] Sitemap submitted to Google Search Console
