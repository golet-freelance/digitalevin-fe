export interface Project {
  id: string;
  title: string;
  category: string;
  sector: string;
  result: string;
  description: string;
  image: string;
  color: string;
}

export const projects: Project[] = [
  {
    id: "nova-store",
    title: "Nova Store",
    category: "E-commerce",
    sector: "Fashion & Retail",
    result: "+35% conversion",
    description: "A premium e-commerce experience with AI-powered recommendations and seamless checkout flow.",
    image: "/placeholder-project.jpg",
    color: "#2563eb",
  },
  {
    id: "fintech-dashboard",
    title: "FinFlow Dashboard",
    category: "Web App",
    sector: "Finance & Banking",
    result: "4.9★ user rating",
    description: "Real-time financial dashboard with advanced analytics and portfolio management tools.",
    image: "/placeholder-project.jpg",
    color: "#7c3aed",
  },
  {
    id: "green-energy",
    title: "GreenPulse",
    category: "Corporate",
    sector: "Energy & Sustainability",
    result: "+120% lead gen",
    description: "Corporate website that communicates sustainability values while driving qualified leads.",
    image: "/placeholder-project.jpg",
    color: "#059669",
  },
  {
    id: "artisan-coffee",
    title: "Artisan Coffee Co.",
    category: "E-commerce",
    sector: "Food & Beverage",
    result: "+45% AOV",
    description: "Subscription-based coffee e-commerce with custom blend builder and loyalty program.",
    image: "/placeholder-project.jpg",
    color: "#b45309",
  },
  {
    id: "medtech-landing",
    title: "MedSync",
    category: "Landing Page",
    sector: "Healthcare & Tech",
    result: "95 PageSpeed",
    description: "High-converting landing page for a telemedicine platform launch campaign.",
    image: "/placeholder-project.jpg",
    color: "#0891b2",
  },
  {
    id: "realestate-platform",
    title: "SpaceHunt",
    category: "Web App",
    sector: "Real Estate",
    result: "+60% engagement",
    description: "Property discovery platform with virtual tours, smart filters, and instant booking.",
    image: "/placeholder-project.jpg",
    color: "#dc2626",
  },
  {
    id: "saas-analytics",
    title: "DataPulse",
    category: "Web App",
    sector: "SaaS & Analytics",
    result: "+80% retention",
    description: "Analytics SaaS platform with custom dashboards, team collaboration, and API integrations.",
    image: "/placeholder-project.jpg",
    color: "#4f46e5",
  },
  {
    id: "luxury-travel",
    title: "Wanderlux",
    category: "E-commerce",
    sector: "Travel & Hospitality",
    result: "+55% bookings",
    description: "Luxury travel booking platform with curated experiences and concierge services.",
    image: "/placeholder-project.jpg",
    color: "#9333ea",
  },
  {
    id: "fitness-app",
    title: "FitPro",
    category: "Landing Page",
    sector: "Health & Fitness",
    result: "12K signups",
    description: "App launch landing page with interactive demo, social proof, and waitlist management.",
    image: "/placeholder-project.jpg",
    color: "#e11d48",
  },
  {
    id: "legal-firm",
    title: "Sterling & Partners",
    category: "Corporate",
    sector: "Legal Services",
    result: "+90% inquiries",
    description: "Professional law firm website with case study showcases and client portal integration.",
    image: "/placeholder-project.jpg",
    color: "#1e3a5f",
  },
  {
    id: "edu-platform",
    title: "LearnBridge",
    category: "Web App",
    sector: "Education & EdTech",
    result: "50K+ users",
    description: "Online learning platform with live classes, progress tracking, and certification system.",
    image: "/placeholder-project.jpg",
    color: "#f59e0b",
  },
  {
    id: "architecture-studio",
    title: "ArcVision Studio",
    category: "Corporate",
    sector: "Architecture & Design",
    result: "+40% inquiries",
    description: "Minimalist portfolio for an architecture firm with 3D project showcases and virtual walkthroughs.",
    image: "/placeholder-project.jpg",
    color: "#6b7280",
  },
];

export const categories = ["All", "E-commerce", "Corporate", "Landing Page", "Web App"];
