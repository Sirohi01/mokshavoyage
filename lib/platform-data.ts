import {
  BadgeCheck,
  BriefcaseBusiness,
  FileCheck2,
  Globe2,
  HandHeart,
  HeartHandshake,
  Landmark,
  Plane,
  ShieldCheck,
  Sparkles,
  UsersRound
} from "lucide-react";

export const trustMetrics = [
  { label: "Countries supported", value: "30+" },
  { label: "Response coverage", value: "24/7" },
  { label: "Service categories", value: "70+" },
  { label: "Operational workflows", value: "100%" }
];

export const servicePillars = [
  {
    title: "Funeral Services",
    slug: "funeral-services",
    description: "Cremation, burial, samagri, decoration, ambulance, hearse van, livestreaming, and VIP arrangements.",
    icon: HandHeart,
    features: ["Cremation support", "Pandit services", "Live streaming", "Family coordination"]
  },
  {
    title: "International Repatriation",
    slug: "international-repatriation",
    description: "Embassy, airline, airport, cargo, customs, and documentation coordination across borders.",
    icon: Globe2,
    features: ["Body repatriation", "Ashes repatriation", "Embassy clearance", "Airport handover"]
  },
  {
    title: "Travel & Hospitality",
    slug: "travel-hospitality",
    description: "Emergency flights, hotels, airport transfers, travel insurance guidance, and VIP transport.",
    icon: Plane,
    features: ["Flight booking", "Guest accommodation", "Airport transfers", "Visa guidance"]
  },
  {
    title: "Spiritual Care",
    slug: "spiritual-care",
    description: "Pandit booking, Asthi Visarjan, Shraddh, online rituals, temple services, and remembrance ceremonies.",
    icon: Sparkles,
    features: ["Online pandit", "Prayer meetings", "Temple services", "Annual ceremonies"]
  },
  {
    title: "Family Support",
    slug: "family-support",
    description: "Relative calling, WhatsApp updates, obituary design, tribute videos, grief resources, and guidance.",
    icon: UsersRound,
    features: ["Calling relatives", "Digital obituaries", "Invitation cards", "Grief resources"]
  },
  {
    title: "Digital Memorials",
    slug: "digital-memorials",
    description: "Private or public memorial pages with biography, galleries, tributes, guestbook, videos, and QR codes.",
    icon: HeartHandshake,
    features: ["Life journey", "Guestbook", "Privacy controls", "QR code"]
  }
];

export const countries = ["India", "United Kingdom", "United States", "Canada", "Australia", "UAE", "Europe"];

export const processSteps = [
  {
    title: "Reach a care coordinator",
    description: "A trained coordinator captures the family need, location, urgency, documents, and preferred rituals."
  },
  {
    title: "Receive a clear plan",
    description: "The platform prepares a package, timeline, document checklist, logistics path, and quote."
  },
  {
    title: "Track every update",
    description: "Families follow service progress, documents, payments, flights, calls, and coordinator notes securely."
  },
  {
    title: "Complete with dignity",
    description: "Operations, spiritual care, travel, and memorial teams close the case with transparent communication."
  }
];

export const packages = [
  {
    name: "Essential Care",
    price: "Custom quote",
    description: "For local funeral support and family coordination.",
    items: ["Coordinator", "Service checklist", "Vendor scheduling", "Payment tracking"]
  },
  {
    name: "Global Passage",
    price: "Case based",
    description: "For international body or ashes repatriation.",
    items: ["Embassy support", "Airline coordination", "Document tracking", "Airport clearance"]
  },
  {
    name: "Concierge Ritual",
    price: "Premium",
    description: "For spiritual services, travel, hospitality, and VIP arrangements.",
    items: ["Pandit booking", "Travel desk", "Guest logistics", "Digital memorial"]
  }
];

export const adminModules = [
  { title: "CMS & Page Builder", icon: Landmark, count: "28 pages", detail: "Menus, footer, banners, SEO, sections, media, and publishing." },
  { title: "CRM Pipeline", icon: BriefcaseBusiness, count: "146 leads", detail: "Website, WhatsApp, referrals, hospitals, partners, and direct leads." },
  { title: "Case Operations", icon: FileCheck2, count: "32 active", detail: "Tasks, timelines, staff assignment, documents, notes, and verification." },
  { title: "Security & Roles", icon: ShieldCheck, count: "11 roles", detail: "RBAC, audit logs, login history, 2FA readiness, and secure files." },
  { title: "Quality Signals", icon: BadgeCheck, count: "95+ target", detail: "Performance, SEO, accessibility, best practices, and monitoring." }
];

export const portalTimeline = [
  { time: "08:10", title: "Coordinator assigned", detail: "Ananya Rao is now the family care coordinator.", status: "Completed" },
  { time: "09:25", title: "Documents requested", detail: "Death certificate and passport scan pending upload.", status: "Pending" },
  { time: "10:40", title: "Embassy checklist prepared", detail: "Country-specific checklist is ready for review.", status: "Active" },
  { time: "13:30", title: "Flight cargo quote", detail: "Two airline options added to the case file.", status: "Active" }
];
