export interface Project {
  id: string;
  title: string;
  category: string;
  sector: string;
  result: string;
  description: string;
  image: string;
  color: string;
  externalUrl?: string;
}

export const projects: Project[] = [
  {
    id: "steamcraft-sf",
    title: "Steam Craft SF",
    category: "Corporate",
    sector: "Food & Beverage",
    result: "Live Website",
    description: "Modern, elegant website for a premium San Francisco restaurant featuring artisanal cuisine and craft beverages.",
    image: "/placeholder-project.jpg",
    color: "#b45309",
    externalUrl: "https://steamcraftsf.com/",
  },
  {
    id: "yagiz-besicilik",
    title: "Yagiz Besicilik",
    category: "Corporate",
    sector: "Agriculture & Livestock",
    result: "Live Website",
    description: "Professional corporate website for a leading livestock and agriculture business, showcasing quality and sustainability.",
    image: "/placeholder-project.jpg",
    color: "#059669",
    externalUrl: "https://yagizbesicilik.com/",
  },
  {
    id: "alparslan-tekno",
    title: "Alparslan Tekno",
    category: "Corporate",
    sector: "Technology & Services",
    result: "Live Website",
    description: "Cutting-edge technology company website with modern design, showcasing innovative solutions and services.",
    image: "/placeholder-project.jpg",
    color: "#2563eb",
    externalUrl: "https://alparslantekno.com/",
  },
];

export const categories = ["All", "Corporate"];
