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
    href: "https://www.oreilly.com/library/view/learning-go/9781492077206/",
    status: "in progress",
  },

  {
    title: "Designing Data-Intensive Applications",
    href: "https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/",
    status: "in progress",
  },
  {
    title: "Database Internals",
    href: "https://www.databass.dev/",
  },
  {
    title: "The Linux Programming Interface",
    href: "https://man7.org/tlpi/",
  },
  {
    title: "C Programming: A Modern Approach",
    href: "http://knking.com/books/c2/",
  },
  {
    title: "Mastering Algorithms with C",
    href: "https://www.oreilly.com/library/view/mastering-algorithms-with/1565924533/",
  },
  {
    title: "Understanding and Using C Pointers",
    href: "https://www.oreilly.com/library/view/understanding-and-using/9781449344535/",
  },
  {
    title: "Operating Systems: Three Easy Pieces",
    href: "https://pages.cs.wisc.edu/~remzi/OSTEP/",
  },
  {
    title: "C# 12 in a Nutshell",
    href: "https://www.oreilly.com/library/view/c-12-in/9781098147433/",
  },
  {
    title: "Introduction to Algorithms",
    href: "https://en.wikipedia.org/wiki/Introduction_to_Algorithms",
  },
];
