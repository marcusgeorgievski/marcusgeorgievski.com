export type Experience = {
  image: string;
  alt: string;
  title: string;
  company: string;
  companyLink: string;
  from: string;
  to: string;
  location: string;
  description?: string;
  bullets?: string[];
  active?: boolean;
};

export const experiences: Experience[] = [
  {
    image: "/dayforce.jpg",
    alt: "Dayforce",
    title: "Software Developer Intern",
    company: "Dayforce",
    companyLink: "https://www.dayforce.com",
    from: "Jan 2025",
    to: "Aug 2025",
    location: "Toronto, Ontario",
    description: "Delivery Platform and Developer Experience",
  },
  {
    image: "/kore.png",
    alt: "KORE / HTS",
    title: "Software Developer Intern",
    company: "KORE Solutions",
    companyLink: "https://kore.solutions/services.html",
    from: "Sep 2024",
    to: "Dec 2024",
    location: "Toronto, Ontario",
    description: "📈 Internal Shareholder Application",
    // Curr bullet in helpers.tsx
    bullets: [
      "Developed an internal shareholder portal for 1500+ employees using Angular and .NET with Azure",
      "Focused on delivery of MVP with robust security and pixel-perfect UI/UX",
    ],
  },
  {
    image: "/seneca.svg",
    alt: "Seneca Polytechnic",
    title: "Full-Stack Developer (contract)",
    company: "Seneca Polytechnic",
    companyLink: "https://www.senecapolytechnic.ca/innovation/research.html",
    from: "Jun 2024",
    to: "Aug 2024",
    location: "Toronto, Ontario",
    description: "🧪 Applied Research Portal",
    bullets: [
      "Supported the development and delivery of an applied research portal",
      "Led weekly code reviews, optimized database schema and query patterns, boosted bug resolution rate",
    ],
  },
];
