export type Experience = {
  position: string;
  company: string;
  image: string;
  alt?: string;
  location: string;
  description?: string;
  companyLink: string;
  from: string;
  to: string;
  bullets?: string[];
};

export const experiences: Experience[] = [
  {
    position: "Software Developer Intern",
    company: "Dayforce",
    image: "/dayforce.jpg",
    location: "Toronto, Ontario",
    description:
      "Developer Experience Engineering. Worked on infrastructure automation, microservice onboarding processes, and internal tooling for code quality improvements",
    companyLink: "https://www.dayforce.com",
    from: "Jan 2025",
    to: "Aug 2025",
  },
  {
    position: "Software Developer Intern",
    company: "KORE Solutions",
    image: "/kore.png",
    location: "Toronto, Ontario",
    description:
      "Internal Shareholder Application. Developed a shareholder management system enabling employees to view equity holdings and administrators to efficiently configure stock allocations",
    companyLink: "https://kore.solutions/",
    from: "Sep 2024",
    to: "Dec 2024",
  },
  {
    position: "Full-Stack Developer, contract",
    company: "Seneca Polytechnic",
    image: "/seneca.svg",
    location: "Toronto, Ontario",
    description:
      "Applied Research Portal. Optimized database operations, implemented efficient data fetching patterns, and architected application routing for the research portal system",
    companyLink: "https://www.senecapolytechnic.ca/innovation/research.html",
    from: "Jun 2024",
    to: "Aug 2024",
  },
];
