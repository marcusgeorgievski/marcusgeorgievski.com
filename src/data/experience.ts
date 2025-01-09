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
    to: "Present",
    location: "Toronto, Ontario",
    description: "Developer Experience Engineering",
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
      "Responsible for delivery of MVP with robust security, pixel-perfect UI/UX, and a strong focus on maintainability",
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
