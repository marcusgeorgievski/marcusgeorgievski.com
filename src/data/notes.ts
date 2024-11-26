export type Note = {
  title: string;
  link: string;
  description: string;
  tags: string[];
};

type ReadingItem = {
  title: string;
  href: string;
  status?: "in progress" | "completed";
};

export const notes: Note[] = [
  {
    title: "Learning Go",
    link: "https://github.com/marcusgeorgievski/learning-go",
    description:
      'Complete notes and coding excercises from the book "Learning Go". A guide to understanding Go and its concepts, features, and best practices.',
    tags: ["Go"],
  },
];

export const readingList: ReadingItem[] = [
  {
    title: "Learning Go",
    href: "#",
    status: "in progress",
  },

  {
    title: "Designing Data-Intensive Applications",
    href: "#",
  },
  {
    title: "Database Internals",
    href: "#",
  },
  {
    title: "C# 12 in a Nutshell",
    href: "#",
  },
  {
    title: "Mastering Agorithms with C",
    href: "#",
  },
];
