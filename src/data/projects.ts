export type Project = {
  title: string;
  description: string;
  image: string;
  github?: string;
  live?: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "bytes",
    description:
      "Collection of byte-sized software development projects exploring various technologies and concepts.",
    image: "/bytes.png",
    github: "https://github.com/marcusgeorgievski/bytes",
    tags: ["DevOps", "Cloud", "Microservices"],
  },
  {
    title: "AWS Microservice",
    description:
      "Microservice for authenticated users to upload + retrieve diverse file objects.",
    image: "/fragments.png",
    github: "https://github.com/marcusgeorgievski/fragments",
    tags: ["AWS", "Docker", "JavaScript", "Express"],
  },
  {
    title: "StudyHome",
    description:
      "All-in-one student management platform for tracking assessments and organizing notes.",
    image: "/studyhome.png",
    live: "https://prj-frontend.vercel.app",
    tags: ["Next.js", "React", "SQL", "Auth", "Express"],
  },
  {
    title: "Job Data Scraper",
    description:
      "Transform job posting data based on title and technical skills into a chart + csv.",
    image: "/job-scraper.png",
    github: "https://github.com/marcusgeorgievski/indeed-skill-scrape",
    tags: ["Python", "Selenium", "Pandas", "bs4", "Matplotlib"],
  },
  {
    title: "Sprout Spot",
    description:
      "Hackathon project to help connect local sustainable farmers to consumers.",
    image: "/sproutspot.png",
    github: "https://devpost.com/software/sprout-spot",
    tags: ["🏆", "Next.js"],
  },
  {
    title: "Tic-Tac-Go",
    description: "Tic-tac-toe for the terminal, built with Go.",
    image: "/tictacgo.png",
    github: "https://github.com/marcusgeorgievski/tic-tac-go",
    tags: ["Go"],
  },
];
