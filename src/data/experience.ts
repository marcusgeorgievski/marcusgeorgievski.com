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
    description: "Platform Architecture and Developer Experience",
  },
  {
    image: "/kore.png",
    alt: "KORE / HTS",
    title: "Software Developer Intern",
    company: "KORE / HTS",
    companyLink: "https://kore.solutions/services.html",
    from: "Sep 2024",
    to: "Dec 2024",
    location: "Toronto, Ontario",
    description: "📈 Internal Shareholder Application",
    // Curr bullet in helpers.tsx
    bullets: [
      "Developed a secure shareholder portal using Angular and .NET with Azure, helping 1500+ employees manage their shares easily.",
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
      "Supported the development of an applied research portal",
      "Led weekly code reviews and mentored teammates, optimized database schema and query patterns",
    ],
  },
];
