export enum Tag {
  Computing = "Computing",
  NonFiction = "Non-Fiction",
}

export enum ResourceType {
  Book = "book",
  Article = "article",
  Bookmark = "bookmark",
}

export enum Status {
  Reading = "reading",
  Completed = "completed",
  Todo = "todo",
}

export type Resource = {
  title: string;
  description: string;
  link: string;
  tags: Tag[];
  author?: string;
  type?: ResourceType;
  status?: Status;
  readRating?: number;
};

export const computingResources: Resource[] = [
  {
    title: "Operating Systems: Three Easy Pieces",
    description: "A comprehensive introduction to operating systems concepts.",
    link: "https://pages.cs.wisc.edu/~remzi/OSTEP/",
    tags: [Tag.Computing],
    author: "Arpaci-Dusseau",
    type: ResourceType.Book,
    status: Status.Todo,
  },
  {
    title: "TCP/IP Illustrated, Volume 1",
    description: "An in-depth exploration of TCP/IP networking protocols.",
    link: "https://www.amazon.com/TCP-Illustrated-Vol-Addison-Wesley-Professional/dp/0321336313",
    tags: [Tag.Computing],
    author: "W. Richard Stevens",
    type: ResourceType.Book,
    status: Status.Todo,
  },
  {
    title: "Understanding Distributed Systems",
    description: "A practical guide to distributed systems fundamentals.",
    link: "https://www.understandingdistributed.com/",
    tags: [Tag.Computing],
    author: "Roberto Vitillo",
    type: ResourceType.Book,
    status: Status.Todo,
  },
  {
    title: "Web Security for Developers",
    description: "A developer-focused overview of web security principles.",
    link: "https://www.nostarch.com/websecurity",
    tags: [Tag.Computing],
    author: "Malcolm McDonald",
    type: ResourceType.Book,
    status: Status.Todo,
  },
  {
    title: "Designing Data-Intensive Applications",
    description: "A deep dive into building scalable data systems.",
    link: "https://dataintensive.net/",
    tags: [Tag.Computing],
    author: "Martin Kleppmann",
    type: ResourceType.Book,
    status: Status.Todo,
  },
  {
    title: "Software Engineering at Google",
    description: "Insights into Google's software engineering practices.",
    link: "https://abseil.io/resources/swe-book",
    tags: [Tag.Computing],
    author: "Titus Winters, Tom Manshreck, and Hyrum Wright",
    type: ResourceType.Book,
    status: Status.Todo,
  },
  {
    title: "Building Secure and Reliable Systems",
    description: "Guidance on building secure and reliable software systems.",
    link: "https://landing.google.com/sre/books/",
    tags: [Tag.Computing],
    author: "Heather Adkins et al. (Google SRE)",
    type: ResourceType.Book,
    status: Status.Todo,
  },
];
export const nonfictionResources: Resource[] = [
  {
    title: "A Very Short History of the Israel-Palestine Conflict",
    description: "A concise overview of the Israel-Palestine conflict",
    link: "https://www.penguin.co.uk/books/451795/a-very-short-history-of-the-israel-palestine-conflict-by-pappe-ilan/9780141999370",
    tags: [Tag.NonFiction],
    author: "Ilan Pappe",
    type: ResourceType.Book,
    status: Status.Todo,
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    description: "An exploration of the history and impact of Humans.",
    link: "https://www.ynharari.com/book/sapiens-2/",
    tags: [Tag.NonFiction],
    author: "Yuval Noah Harari",
    type: ResourceType.Book,
    status: Status.Todo,
  },
  {
    title: "The Uninhabitable Earth",
    description: "A look at the potential consequences of climate change.",
    link: "https://www.penguinrandomhouse.com/books/562688/the-uninhabitable-earth-by-david-wallace-wells/",
    tags: [Tag.NonFiction],
    author: "David Wallace-Wells",
    type: ResourceType.Book,
    status: Status.Todo,
  },
  {
    title: "Prisoners of Geography",
    description: "How geography shapes global politics and history.",
    link: "https://www.tim-marshall.com/books/prisoners-of-geography/",
    tags: [Tag.NonFiction],
    author: "Tim Marshall",
    type: ResourceType.Book,
    status: Status.Todo,
  },
  {
    title: "The Balkans, 1804-2012",
    description: "A comprehensive history of the Balkans.",
    link: "https://www.penguinrandomhouse.com/books/301982/the-balkans-by-misha-glenny/",
    tags: [Tag.NonFiction],
    author: "Misha Glenny",
    type: ResourceType.Book,
    status: Status.Todo,
  },
  {
    title: "A Brief History of Time",
    description: "Stephen Hawking's classic on cosmology and the universe.",
    link: "https://www.penguinrandomhouse.com/books/78067/a-brief-history-of-time-by-stephen-hawking/",
    tags: [Tag.NonFiction],
    author: "Stephen Hawking",
    type: ResourceType.Book,
    status: Status.Todo,
  },
  {
    title: "The Hundred Years' War on Palestine",
    description: "A history of the Palestinian struggle for nationhood.",
    link: "https://us.macmillan.com/books/9781250787651/thehundredyearswaronpalestine",
    tags: [Tag.NonFiction],
    author: "Rashid Khalidi",
    type: ResourceType.Book,
    status: Status.Todo,
  },
];

export const resources: Resource[] = [
  ...computingResources,
  ...nonfictionResources,
];
