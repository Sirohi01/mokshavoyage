import {
  Ambulance,
  BookOpen,
  ClipboardList,
  FileCheck2,
  Flower2,
  Globe2,
  HandHeart,
  HeartHandshake,
  Hotel,
  Plane,
  PlaySquare,
  ShieldCheck,
  Sparkles,
  UsersRound,
  type LucideIcon
} from "lucide-react";

export type PublicService = {
  title: string;
  slug: string;
  category: "funeral" | "international" | "spiritual" | "travel" | "family" | "digital";
  shortDescription: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  image: string;
  seoTitle: string;
  seoDescription: string;
};

export const services: PublicService[] = [
  {
    title: "Funeral Services",
    slug: "funeral-services",
    category: "funeral",
    shortDescription: "Complete funeral arrangements",
    description: "End-to-end cremation, burial, samagri, decoration, hearse, ambulance and family coordination support.",
    icon: HandHeart,
    features: ["Cremation support", "Funeral samagri", "Hearse van", "Flower arrangements"],
    image: "/images/moksha/assistance-flowers.png",
    seoTitle: "Funeral Services | Moksha Voyage",
    seoDescription: "Dignified funeral services with complete family support and transparent coordination."
  },
  {
    title: "International Repatriation",
    slug: "international-repatriation",
    category: "international",
    shortDescription: "Body and ashes repatriation worldwide",
    description: "Embassy, airline, airport, customs, cargo and documentation coordination for global repatriation cases.",
    icon: Plane,
    features: ["Body repatriation", "Ashes repatriation", "Embassy coordination", "Airport clearance"],
    image: "/images/moksha/travel-assistance.png",
    seoTitle: "International Repatriation | Moksha Voyage",
    seoDescription: "Trusted international body and ashes repatriation support across countries."
  },
  {
    title: "Spiritual Services",
    slug: "spiritual-services",
    category: "spiritual",
    shortDescription: "Pandit services, rituals and ceremonies",
    description: "Pandit booking, Shraddh, Asthi Visarjan, prayer meetings, online rituals and remembrance ceremonies.",
    icon: Sparkles,
    features: ["Pandit booking", "Shraddh services", "Online rituals", "Prayer meetings"],
    image: "/images/moksha/spiritual-diya.png",
    seoTitle: "Spiritual Services | Moksha Voyage",
    seoDescription: "Respectful spiritual care, rituals and pandit services for families worldwide."
  },
  {
    title: "Travel & Hospitality",
    slug: "travel-hospitality",
    category: "travel",
    shortDescription: "Flights, hotels and family travel support",
    description: "Emergency flight booking, hotel stays, airport transfers, guest accommodation and VIP transportation.",
    icon: Hotel,
    features: ["Emergency flights", "Hotel booking", "Airport transfers", "VIP transport"],
    image: "/images/moksha/travel-assistance.png",
    seoTitle: "Travel & Hospitality | Moksha Voyage",
    seoDescription: "Emergency travel and hospitality assistance for families during difficult times."
  },
  {
    title: "Documentation Support",
    slug: "documentation-support",
    category: "international",
    shortDescription: "All documentation and embassy assistance",
    description: "Death certificate, NOC, passport, visa guidance, embassy paperwork and document verification support.",
    icon: FileCheck2,
    features: ["Death certificate", "NOC assistance", "Passport support", "Visa guidance"],
    image: "/images/moksha/documentation-guide.png",
    seoTitle: "Documentation Support | Moksha Voyage",
    seoDescription: "Document and embassy assistance for funeral and repatriation workflows."
  },
  {
    title: "Digital Memorials",
    slug: "digital-memorials",
    category: "digital",
    shortDescription: "Digital memorials and tribute pages",
    description: "Private or public memorial pages with biography, gallery, videos, condolences, guestbook and QR code.",
    icon: BookOpen,
    features: ["Biography", "Photo gallery", "Guestbook", "QR code"],
    image: "/images/moksha/grief-support.png",
    seoTitle: "Digital Memorials | Moksha Voyage",
    seoDescription: "Beautiful digital memorial pages for remembrance and family tributes."
  },
  {
    title: "Live Streaming",
    slug: "live-streaming",
    category: "family",
    shortDescription: "Live telecast of rituals and ceremonies",
    description: "Private livestream support for relatives who cannot attend ceremonies physically.",
    icon: PlaySquare,
    features: ["Private links", "Ceremony recording", "Remote family access", "Technical support"],
    image: "/images/moksha/spiritual-diya.png",
    seoTitle: "Live Streaming Services | Moksha Voyage",
    seoDescription: "Private live streaming for funeral and spiritual ceremonies."
  },
  {
    title: "Ambulance Services",
    slug: "ambulance-services",
    category: "funeral",
    shortDescription: "Local and international transport",
    description: "Ambulance, hearse van and local transportation coordination with urgent response.",
    icon: Ambulance,
    features: ["Ambulance booking", "Hearse van", "Local transfers", "Urgent dispatch"],
    image: "/images/moksha/assistance-flowers.png",
    seoTitle: "Ambulance Services | Moksha Voyage",
    seoDescription: "Ambulance and hearse van support for funeral coordination."
  },
  {
    title: "Flower & Decor",
    slug: "flower-decor",
    category: "funeral",
    shortDescription: "Floral arrangements and decorations",
    description: "Elegant floral arrangements, prayer hall decoration and ceremony presentation support.",
    icon: Flower2,
    features: ["Flower arrangements", "Prayer hall decor", "Garlands", "Custom themes"],
    image: "/images/moksha/assistance-flowers.png",
    seoTitle: "Flower Decoration | Moksha Voyage",
    seoDescription: "Premium floral and funeral decoration services."
  },
  {
    title: "Family Support",
    slug: "family-support",
    category: "family",
    shortDescription: "Calling, updates and family coordination",
    description: "Relative calling, WhatsApp updates, invitation cards, tribute videos and grief support resources.",
    icon: HeartHandshake,
    features: ["Calling relatives", "WhatsApp updates", "Tribute videos", "Grief resources"],
    image: "/images/moksha/grief-support.png",
    seoTitle: "Family Support | Moksha Voyage",
    seoDescription: "Compassionate family coordination and communication support."
  }
];

export const countries = [
  { name: "India", slug: "india", code: "IN", description: "Funeral, spiritual and repatriation support across major Indian cities.", popularCities: ["Delhi", "Mumbai", "Ahmedabad", "Bengaluru"], documents: ["Death certificate", "Photo ID", "Cremation permit"] },
  { name: "United Kingdom", slug: "united-kingdom", code: "GB", description: "UK to India and global repatriation coordination.", popularCities: ["London", "Birmingham", "Manchester"], documents: ["Death certificate", "Passport", "Embalming certificate"] },
  { name: "United States", slug: "united-states", code: "US", description: "US repatriation, funeral coordination and family travel assistance.", popularCities: ["New York", "Chicago", "San Francisco"], documents: ["Death certificate", "Passport", "Consular NOC"] },
  { name: "Canada", slug: "canada", code: "CA", description: "Canada repatriation and spiritual care support.", popularCities: ["Toronto", "Vancouver", "Calgary"], documents: ["Death certificate", "Passport", "Airline clearance"] },
  { name: "Australia", slug: "australia", code: "AU", description: "Australia repatriation and family support workflows.", popularCities: ["Melbourne", "Sydney", "Perth"], documents: ["Death certificate", "Passport", "Cargo documents"] },
  { name: "UAE", slug: "uae", code: "AE", description: "Dubai, Abu Dhabi and UAE to India repatriation support.", popularCities: ["Dubai", "Abu Dhabi", "Sharjah"], documents: ["Death certificate", "Police NOC", "Passport"] }
];

export const testimonials = [
  { name: "Nitin Kumar", location: "London, UK", text: "Moksha Voyage was a blessing for our family in the toughest time. They handled everything with so much care and respect.", rating: 5 },
  { name: "Sadhana Chaudhary", location: "Dubai, UAE", text: "The team helped us repatriate my father's mortal remains from Dubai to India seamlessly. Highly recommended.", rating: 5 },
  { name: "Anita Desai", location: "Toronto, Canada", text: "Their spiritual services gave us peace and comfort. Everything was arranged beautifully and on time.", rating: 5 },
  { name: "Vansh Chaudhary", location: "Melbourne, Australia", text: "Professional, compassionate and always available. Thank you for being there for us.", rating: 5 }
];

export const faqs = [
  { question: "How quickly can Moksha Voyage respond?", answer: "Our care team is available 24/7 for urgent assistance and can begin coordination immediately.", category: "General" },
  { question: "Do you support international repatriation?", answer: "Yes. We coordinate embassy, airline, airport, customs and documentation workflows across countries.", category: "International" },
  { question: "Can families track case updates?", answer: "Yes. Families can use the secure portal for timeline, documents, payments, coordinator details and messages.", category: "Portal" }
];

export const resources = [
  { title: "International Repatriation Process Explained", slug: "international-repatriation-process", type: "guide", description: "A practical guide to documents, embassy steps and airline coordination.", thumbnail: "/images/moksha/travel-assistance.png", category: "International" },
  { title: "Understanding Shraddh Rituals & Their Importance", slug: "understanding-shraddh", type: "article", description: "A respectful overview of Shraddh rituals and family remembrance.", thumbnail: "/images/moksha/spiritual-diya.png", category: "Spiritual" },
  { title: "Documents Required for Repatriation", slug: "documents-required-for-repatriation", type: "checklist", description: "Core document checklist for body and ashes repatriation.", thumbnail: "/images/moksha/documentation-guide.png", category: "Documentation" },
  { title: "How to Support Someone Who is Grieving", slug: "support-someone-grieving", type: "article", description: "Simple ways to support a family through grief.", thumbnail: "/images/moksha/grief-support.png", category: "Support" }
];

export const blogs = resources.map((resource) => ({
  title: resource.title,
  slug: resource.slug,
  excerpt: resource.description,
  content: `${resource.description} Moksha Voyage care coordinators guide families with calm, clear and compassionate support at every step.`,
  featuredImage: resource.thumbnail,
  category: resource.category,
  readTime: "4 min read"
}));

export const packages = [
  { name: "Essential Care", slug: "essential-care", description: "For local funeral support and family coordination.", price: "Custom Quote", items: ["Coordinator", "Service checklist", "Vendor scheduling", "Payment tracking"], badge: "Most requested" },
  { name: "Global Passage", slug: "global-passage", description: "For international body or ashes repatriation.", price: "Case Based", items: ["Embassy support", "Airline coordination", "Document tracking", "Airport clearance"], badge: "International" },
  { name: "Concierge Ritual", slug: "concierge-ritual", description: "For spiritual services, travel, hospitality and VIP arrangements.", price: "Premium", items: ["Pandit booking", "Travel desk", "Guest logistics", "Digital memorial"], badge: "Premium" }
];

export const processSteps = [
  ["Reach Out", "Contact us anytime. We are available 24/7.", ShieldCheck],
  ["Share Details", "Share your requirements with our care experts.", ClipboardList],
  ["We Take Care", "We handle everything with dignity and compassion.", HandHeart],
  ["Stay Updated", "Get real-time updates at every step.", Globe2],
  ["Support Beyond", "We are with you even after the services.", UsersRound]
] as [string, string, LucideIcon][];
