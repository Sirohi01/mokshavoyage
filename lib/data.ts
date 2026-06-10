import {
  Ambulance,
  BookOpen,
  CircleDollarSign,
  FileCheck2,
  Flower2,
  Globe2,
  HandHeart,
  HeartHandshake,
  Hotel,
  Plane,
  PlaySquare,
  ClipboardList,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
  UsersRound,
} from "lucide-react";

export type ServiceData = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  icon: LucideIcon;
  heroImage: string;
  content: {
    overview: string;
    whatIsIncluded: string[];
    process: { step: number; title: string; description: string }[];
  };
};

export const servicesData: ServiceData[] = [
  {
    id: "funeral-services",
    slug: "funeral-services",
    title: "Funeral Services",
    shortDescription: "Complete funeral arrangements handled with dignity and respect.",
    icon: HandHeart,
    heroImage: "/images/moksha/funeral.png",
    content: {
      overview: "We understand that losing a loved one is incredibly difficult. Our comprehensive funeral services are designed to lift the burden of planning off your shoulders. From securing the venue to arranging transport, we handle every detail with the utmost respect and care.",
      whatIsIncluded: [
        "End-to-end funeral planning and execution",
        "Arrangement of hearse and transportation",
        "Assistance with necessary local documentation",
        "Booking of cremation or burial grounds",
        "Provision of required materials and items"
      ],
      process: [
        { step: 1, title: "Initial Consultation", description: "Our care team connects with you to understand your needs and cultural preferences." },
        { step: 2, title: "Planning & Coordination", description: "We arrange all logistics, including transport, venue, and required items." },
        { step: 3, title: "Execution", description: "Our on-ground staff ensures everything runs smoothly during the service." },
        { step: 4, title: "Post-Service Support", description: "We assist with death certificates and other post-funeral documentation." }
      ]
    }
  },
  {
    id: "international-repatriation",
    slug: "international-repatriation",
    title: "International Repatriation",
    shortDescription: "Dignified body and ashes repatriation worldwide.",
    icon: Plane,
    heroImage: "/images/moksha/international.png",
    content: {
      overview: "Bringing a loved one home from another country involves complex logistics and paperwork. We specialize in international repatriation, coordinating with embassies, airlines, and local authorities to ensure a smooth, dignified journey home.",
      whatIsIncluded: [
        "Embalming and special casket preparation",
        "Coordination with local embassies and consulates",
        "Flight booking for the deceased and family",
        "All customs and clearance documentation",
        "Airport-to-home transportation"
      ],
      process: [
        { step: 1, title: "Documentation", description: "We collect medical reports, passport details, and local clearances." },
        { step: 2, title: "Embassy Clearance", description: "Our team liaises directly with the respective embassy to obtain NOC." },
        { step: 3, title: "Flight Preparation", description: "The deceased is prepared according to international airline standards." },
        { step: 4, title: "Arrival", description: "We handle customs clearance at the destination and arrange final transport." }
      ]
    }
  },
  {
    id: "spiritual-services",
    slug: "spiritual-services",
    title: "Spiritual Services",
    shortDescription: "Pandit services, rituals, and ceremonies.",
    icon: Sparkles,
    heroImage: "/images/moksha/spritual.png",
    content: {
      overview: "To honor the departed soul according to traditional customs, we offer comprehensive spiritual services. Whether it's finding the right Pandit or gathering specific samagri (ritual items), we ensure all religious obligations are met respectfully.",
      whatIsIncluded: [
        "Experienced Pandits and priests for all faiths",
        "Arrangement of complete Puja Samagri",
        "Organization of Chautha, Tehravin, or Shraddh",
        "Guidance on rituals and customs",
        "Online ritual services for remote family members"
      ],
      process: [
        { step: 1, title: "Understanding Requirements", description: "We discuss your community-specific traditions and ritual needs." },
        { step: 2, title: "Priest Assignment", description: "An experienced priest is assigned for your specific ceremony." },
        { step: 3, title: "Material Arrangement", description: "All necessary items and flowers are procured in advance." },
        { step: 4, title: "Ceremony Conduction", description: "The rituals are performed peacefully at your home or chosen venue." }
      ]
    }
  },
  {
    id: "travel-hospitality",
    slug: "travel-hospitality",
    title: "Travel & Hospitality",
    shortDescription: "Flights, hotels, and family travel support.",
    icon: Hotel,
    heroImage: "/images/moksha/travel.png",
    content: {
      overview: "When family members need to travel urgently to attend a funeral, managing bookings is stressful. Our travel and hospitality desk assists with emergency flight bookings, local accommodation, and ground transport for relatives.",
      whatIsIncluded: [
        "Emergency flight ticket bookings",
        "Hotel and accommodation arrangements",
        "Airport pickup and drop-off services",
        "Visa assistance for urgent travel",
        "Local transport coordination"
      ],
      process: [
        { step: 1, title: "Travel Request", description: "Provide us with the travel dates, origin, and destination." },
        { step: 2, title: "Fast Booking", description: "We secure flights and hotels at the best available emergency rates." },
        { step: 3, title: "Itinerary Delivery", description: "Complete itineraries are shared with the traveling family members." },
        { step: 4, title: "Ground Support", description: "Cabs are arranged for seamless airport transfers upon arrival." }
      ]
    }
  },
  {
    id: "documentation-support",
    slug: "documentation-support",
    title: "Documentation Support",
    shortDescription: "All documentation and embassy assistance.",
    icon: FileCheck2,
    heroImage: "/images/moksha/documentation-guide.png",
    content: {
      overview: "Navigating legal and administrative paperwork during bereavement can be overwhelming. We provide end-to-end documentation support, ensuring all certificates, clearances, and legal requirements are fulfilled promptly.",
      whatIsIncluded: [
        "Procurement of Death Certificate",
        "Hospital and Police Clearances (NOC)",
        "Embalming Certificates",
        "Embassy and Consulate liaison",
        "Translation and notarization of documents"
      ],
      process: [
        { step: 1, title: "Document Review", description: "We assess the required paperwork based on the situation (local or international)." },
        { step: 2, title: "Application Submission", description: "We submit applications to local municipal and police authorities." },
        { step: 3, title: "Follow-up", description: "Our team follows up continuously to expedite the process." },
        { step: 4, title: "Delivery", description: "Original documents and certified copies are safely delivered to you." }
      ]
    }
  },
  {
    id: "memorial-services",
    slug: "memorial-services",
    title: "Memorial Services",
    shortDescription: "Digital memorials and tribute pages.",
    icon: BookOpen,
    heroImage: "/images/moksha/memorial.png",
    content: {
      overview: "Preserve the memory of your loved one with our beautifully crafted digital memorial services. We create tribute pages where family and friends from around the world can share memories, photos, and condolences.",
      whatIsIncluded: [
        "Custom digital memorial page creation",
        "Photo and video galleries",
        "Virtual guestbook for condolences",
        "Obituary drafting and publication",
        "QR codes linking to the memorial page"
      ],
      process: [
        { step: 1, title: "Content Gathering", description: "Share photos, videos, and a brief biography of your loved one." },
        { step: 2, title: "Design & Setup", description: "We create a beautiful, respectful digital tribute page." },
        { step: 3, title: "Review", description: "You review the page and suggest any modifications." },
        { step: 4, title: "Sharing", description: "We provide a link and QR code for you to share with family and friends." }
      ]
    }
  },
  {
    id: "ambulance-services",
    slug: "ambulance-services",
    title: "Ambulance Services",
    shortDescription: "Local and long-distance transport.",
    icon: Ambulance,
    heroImage: "/images/moksha/amb.png",
    content: {
      overview: "We offer prompt and respectful ambulance and hearse van services for the transportation of the deceased. Whether it's a short local transfer or a long-distance inter-city journey, our vehicles are equipped for dignified transport.",
      whatIsIncluded: [
        "Dead body transport by road",
        "Air-conditioned hearse vans",
        "Freezer box ambulance services",
        "Trained staff for dignified handling",
        "Inter-city and inter-state transfers"
      ],
      process: [
        { step: 1, title: "Request", description: "Contact us with the pickup and drop-off locations." },
        { step: 2, title: "Dispatch", description: "A suitable vehicle is immediately dispatched to your location." },
        { step: 3, title: "Preparation", description: "Our staff respectfully moves the deceased into the vehicle." },
        { step: 4, title: "Transport", description: "Safe and timely transportation to the final destination." }
      ]
    }
  },
  {
    id: "body-repatriation",
    slug: "body-repatriation",
    title: "Body Repatriation",
    shortDescription: "Safe and compliant transport across borders.",
    icon: Globe2,
    heroImage: "/images/moksha/bodyTrans.png",
    content: {
      overview: "When a loved one passes away abroad, bringing them home is our priority. We manage the entire body repatriation process, adhering strictly to international health and aviation regulations.",
      whatIsIncluded: [
        "International standard embalming",
        "Zinc-lined coffin provision",
        "Flight cargo booking",
        "Customs and health department clearances",
        "Ground transport at origin and destination"
      ],
      process: [
        { step: 1, title: "Authorization", description: "We obtain the legal authorization from the next of kin." },
        { step: 2, title: "Clearances", description: "Securing NOCs from local police, health departments, and embassies." },
        { step: 3, title: "Preparation", description: "Embalming and sealing the casket as per international norms." },
        { step: 4, title: "Transit", description: "Managing the flight and ensuring safe handover upon arrival." }
      ]
    }
  },
  {
    id: "ashes-repatriation",
    slug: "ashes-repatriation",
    title: "Ashes Repatriation",
    shortDescription: "Respectful transport of cremated remains.",
    icon: ShieldCheck,
    heroImage: "/images/moksha/ashes.png",
    content: {
      overview: "Transporting cremated remains across international borders requires specific documentation and specialized packing. We offer secure and respectful ashes repatriation services.",
      whatIsIncluded: [
        "Appropriate urns for international travel",
        "Customs declarations and clearances",
        "Embassy NOC for ashes",
        "Secure packaging for air transit",
        "Door-to-door delivery options"
      ],
      process: [
        { step: 1, title: "Documentation", description: "Gathering cremation certificates and death certificates." },
        { step: 2, title: "Clearance", description: "Obtaining required permissions from embassies." },
        { step: 3, title: "Packaging", description: "Packing the urn securely in accordance with airline policies." },
        { step: 4, title: "Transport", description: "Sending the ashes via cargo or as accompanied baggage." }
      ]
    }
  },
  {
    id: "embassy-assistance",
    slug: "embassy-assistance",
    title: "Embassy Assistance",
    shortDescription: "Expert liaison for international clearances.",
    icon: UsersRound,
    heroImage: "/images/moksha/embacy.png",
    content: {
      overview: "Dealing with foreign embassies can be time-consuming and confusing. Our team has extensive experience liaising with consulates globally to expedite No Objection Certificates (NOC) and other vital clearances.",
      whatIsIncluded: [
        "Direct communication with consular officers",
        "Document translation and attestation",
        "Passport cancellation processing",
        "Visa cancellation procedures",
        "Fast-tracking emergency cases"
      ],
      process: [
        { step: 1, title: "Assessment", description: "Evaluating the specific requirements of the respective embassy." },
        { step: 2, title: "Preparation", description: "Compiling and translating all necessary documents." },
        { step: 3, title: "Submission", description: "Submitting the application directly to the consular office." },
        { step: 4, title: "Procurement", description: "Collecting the NOC and cleared documents on your behalf." }
      ]
    }
  },
  {
    id: "pandit-services",
    slug: "pandit-services",
    title: "Pandit Services",
    shortDescription: "Experienced priests for all ceremonies.",
    icon: Sparkles,
    heroImage: "/images/moksha/pandit.png",
    content: {
      overview: "Finding the right priest during a time of loss can be difficult. We provide experienced Pandits from various communities who are well-versed in specific regional and religious funeral rites (Antyesti).",
      whatIsIncluded: [
        "Community-specific Pandits (e.g., Arya Samaj, Sanatan Dharam)",
        "Priests available for immediate dispatch",
        "Complete guidance on required rituals",
        "Arrangement of all Puja Samagri",
        "Multilingual priests available"
      ],
      process: [
        { step: 1, title: "Requirement Gathering", description: "We understand your community and language preferences." },
        { step: 2, title: "Assignment", description: "An appropriate and experienced Pandit is assigned." },
        { step: 3, title: "Preparation", description: "The Pandit guides the family on the upcoming rituals." },
        { step: 4, title: "Ceremony", description: "The rituals are conducted with utmost devotion and correctness." }
      ]
    }
  },
  {
    id: "shraddh-services",
    slug: "shraddh-services",
    title: "Shraddh Services",
    shortDescription: "Complete arrangements for ancestral rituals.",
    icon: Sparkles,
    heroImage: "/images/moksha/Shraddh.png",
    content: {
      overview: "Shraddh is a vital ritual to pay homage to ancestors. We assist in organizing the entire ceremony, ensuring it is performed according to Vedic traditions, bringing peace to the departed souls.",
      whatIsIncluded: [
        "Booking of venues for Shraddh (if required)",
        "Arrangement of experienced Pandits",
        "Procurement of specific Shraddh Samagri (Pind Daan items)",
        "Brahman Bhoj (feeding priests) arrangements",
        "Cow and dog feeding arrangements"
      ],
      process: [
        { step: 1, title: "Consultation", description: "Discussing the specific date (Tithi) and scale of the ceremony." },
        { step: 2, title: "Venue & Priest", description: "Finalizing the location and assigning the priest." },
        { step: 3, title: "Samagri Arrangement", description: "All required items are procured fresh." },
        { step: 4, title: "Ritual Execution", description: "The ceremony is performed seamlessly." }
      ]
    }
  },
  {
    id: "online-rituals",
    slug: "online-rituals",
    title: "Online Rituals",
    shortDescription: "Remote participation in final rites.",
    icon: PlaySquare,
    heroImage: "/images/moksha/online.png",
    content: {
      overview: "For family members living abroad or unable to travel, we offer high-quality online ritual services. Participate in the final rites, prayers, or Shraddh virtually, guided by a Pandit over a video call.",
      whatIsIncluded: [
        "High-definition video streaming setup",
        "Dedicated Pandit conducting rituals on your behalf",
        "Live interaction and guided prayers",
        "Recording of the ceremony (optional)",
        "Sankalp taken in your name"
      ],
      process: [
        { step: 1, title: "Scheduling", description: "Fixing a convenient time for the online session." },
        { step: 2, title: "Link Generation", description: "A secure video conferencing link is shared." },
        { step: 3, title: "Setup", description: "Our team ensures good internet and clear audio/video at the venue." },
        { step: 4, title: "Live Ceremony", description: "You join the call and the priest guides you through the rituals." }
      ]
    }
  },
  {
    id: "air-ambulance",
    slug: "air-ambulance",
    title: "Air Ambulance",
    shortDescription: "Urgent medical and mortal remains transport via air.",
    icon: Ambulance,
    heroImage: "/images/moksha/airTransport.png",
    content: {
      overview: "When time is of the essence, or when commercial flights are not viable, our chartered air ambulance services provide rapid, point-to-point transportation of the deceased, accompanied by necessary professionals.",
      whatIsIncluded: [
        "Chartered aircraft or helicopter booking",
        "Coordination with airport authorities for tarmac access",
        "Accompanying medical/handling staff",
        "Expedited clearance processing",
        "Ground ambulance to and from airports"
      ],
      process: [
        { step: 1, title: "Urgent Request", description: "Immediate assessment of the route and aircraft availability." },
        { step: 2, title: "Clearances", description: "Fast-tracking aviation and medical clearances." },
        { step: 3, title: "Flight Preparation", description: "Loading the casket onto the specialized aircraft." },
        { step: 4, title: "Transport", description: "Direct flight to the destination with continuous updates." }
      ]
    }
  },
  {
    id: "live-streaming",
    slug: "live-streaming",
    title: "Live Streaming",
    shortDescription: "Live telecast of rituals and ceremonies.",
    icon: PlaySquare,
    heroImage: "/images/moksha/online.png",
    content: {
      overview: "When distance prevents family and friends from attending in person, our professional live streaming service ensures everyone can participate in the final farewell.",
      whatIsIncluded: [
        "Multi-camera high-definition streaming",
        "Private, secure viewing links",
        "Professional audio setup for clear chanting/prayers",
        "Recording of the entire ceremony",
        "Technical support during the stream"
      ],
      process: [
        { step: 1, title: "Venue Check", description: "Assessing internet connectivity and camera placement." },
        { step: 2, title: "Link Generation", description: "Sharing the secure link with your family." },
        { step: 3, title: "Setup", description: "Our team arrives early to set up cameras and microphones." },
        { step: 4, title: "Broadcasting", description: "Live streaming the ceremony with respect and zero intrusion." }
      ]
    }
  },
  {
    id: "flower-decor",
    slug: "flower-decor",
    title: "Flower & Decor",
    shortDescription: "Floral arrangements and decorations.",
    icon: Flower2,
    heroImage: "/images/moksha/hero3.png",
    content: {
      overview: "We provide beautiful, fresh floral arrangements for funerals, memorials, and prayer meets. Our decorators create serene environments that reflect your loved one's personality and your cultural traditions.",
      whatIsIncluded: [
        "Hearse van floral decoration",
        "Venue and stage decoration for prayer meets",
        "Garlands and loose flowers for rituals",
        "Custom floral tributes (wreaths, crosses)",
        "Photo framing and decoration"
      ],
      process: [
        { step: 1, title: "Consultation", description: "Discussing flower preferences and color themes." },
        { step: 2, title: "Sourcing", description: "Procuring fresh flowers directly from trusted vendors." },
        { step: 3, title: "Design", description: "Creating custom wreaths and garlands." },
        { step: 4, title: "Decoration", description: "Setting up the venue prior to the arrival of guests." }
      ]
    }
  }
];

export type ResourceData = {
  id: string;
  slug: string;
  tag: string;
  title: string;
  image: string;
  content: string;
};

export const resourcesData: ResourceData[] = [
  {
    id: "international-repatriation-guide",
    slug: "international-repatriation-guide",
    tag: "Guide",
    title: "International Repatriation Process Explained",
    image: "/images/moksha/travel-assistance.png",
    content: "When a loved one passes away in a foreign country, the process of bringing them home can seem daunting. This guide breaks down the international repatriation process into manageable steps. \n\n### Step 1: Legal Formalities\nThe first step always involves local authorities. A death certificate must be issued by a local medical professional, and if the death was sudden, police clearance might be required.\n\n### Step 2: Embassy Involvement\nYour country's embassy or consulate must be notified. They play a crucial role in canceling the passport and issuing a No Objection Certificate (NOC) which allows the body to leave the country.\n\n### Step 3: Embalming and Preparation\nAirlines require bodies to be embalmed and placed in a zinc-lined coffin for international transit. This must be done by certified professionals.\n\nAt Moksha Voyage, we handle all these steps for you, ensuring a dignified journey home."
  },
  {
    id: "shraddh-rituals",
    slug: "shraddh-rituals",
    tag: "Spiritual",
    title: "Understanding Shraddh Rituals & Their Importance",
    image: "/images/moksha/spiritual-diya.png",
    content: "Shraddh is a deeply significant ritual in Hindu tradition, performed to pay homage to one's ancestors (Pitrs). \n\n### Why is it performed?\nIt is believed that performing Shraddh helps the souls of our ancestors attain peace and moksha (liberation). It is an expression of gratitude for the life and lineage they have passed down.\n\n### Key Components\n- **Pind Daan:** Offering of rice balls to the ancestors.\n- **Tarpan:** Offering of water mixed with black sesame seeds.\n- **Brahman Bhoj:** Feeding priests as a way of feeding the ancestors.\n\nOur spiritual care team can help you arrange experienced Pandits and all necessary samagri to perform these rituals authentically."
  },
  {
    id: "repatriation-documents",
    slug: "repatriation-documents",
    tag: "Guide",
    title: "Documents Required for Repatriation",
    image: "/images/moksha/documentation-guide.png",
    content: "Having the correct paperwork is critical for international repatriation. Delays in documentation can cause significant distress. Here is a checklist of generally required documents:\n\n- **Original Passport** of the deceased (for cancellation).\n- **Death Certificate** (issued by local hospital/authorities).\n- **Police Report / NOC** (if applicable).\n- **Embalming Certificate** (certifying the body is safe for transit).\n- **Coffin Sealing Certificate**.\n- **Infectious/Non-Infectious Disease Certificate**.\n- **Consulate/Embassy NOC**.\n\nDifferent countries may have specific additional requirements. We highly recommend consulting with a repatriation expert to ensure no documents are missed."
  },
  {
    id: "supporting-grief",
    slug: "supporting-grief",
    tag: "Support",
    title: "How to Support Someone Who is Grieving",
    image: "/images/moksha/grief-support.png",
    content: "Knowing what to say or do when someone you care about is grieving can be challenging. Here are some meaningful ways to offer support:\n\n### 1. Be Present\nSometimes, just being there physically is enough. You don't always need to have the right words.\n\n### 2. Listen Without Fixing\nGrief isn't a problem to be solved. Let them express their feelings without offering unsolicited advice or trying to \"cheer them up.\"\n\n### 3. Offer Practical Help\nInstead of saying \"let me know if you need anything,\" offer specific help. Say, \"I'm dropping off dinner tonight,\" or \"I can watch the kids on Tuesday.\"\n\n### 4. Remember Their Loved One\nDon't be afraid to say the deceased person's name or share fond memories. It shows that they are not forgotten."
  }
];
