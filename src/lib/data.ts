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
    sector: "steamcraft",
    result: "liveWebsite",
    description: "steamcraft",
    image: "/projects/steamcraft-sf.jpg",
    color: "#b45309",
    externalUrl: "https://steamcraftsf.com/",
  },
  {
    id: "yagiz-besicilik",
    title: "Yagiz Besicilik",
    category: "Corporate",
    sector: "yagiz",
    result: "liveWebsite",
    description: "yagiz",
    image: "/projects/yagiz-besicilik.jpg",
    color: "#059669",
    externalUrl: "https://yagizbesicilik.com/",
  },
  {
    id: "alparslan-tekno",
    title: "Alparslan Tekno",
    category: "Corporate",
    sector: "alparslan",
    result: "liveWebsite",
    description: "alparslan",
    image: "/projects/alparslan-tekno.jpg",
    color: "#2563eb",
    externalUrl: "https://alparslantekno.com/",
  },
];

export const categories = ["All", "Corporate"];
