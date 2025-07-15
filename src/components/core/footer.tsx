import Link from "next/link";

type FooterLink = {
  href: string;
  label: string;
  external?: boolean;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};
export default function Footer() {
  const footerSections: FooterSection[] = [
    {
      title: "Resources",
      links: [
        { href: "/", label: "Site" },
        {
          href: "/reading-list/?tag=computing",
          label: "Reading list",
        },
        // { href: "https://log.marcusgeorgievski.com", label: "Log" },
      ],
    },
    {
      title: "Connect",
      links: [
        {
          href: "https://github.com/marcusgeorgievski",
          label: "GitHub",
          external: true,
        },
        {
          href: "https://www.linkedin.com/in/marcusgeorgievski",
          label: "LinkedIn",
          external: true,
        },
        {
          href: "https://devpost.com/marcusgeorgievski",
          label: "Devpost",
          external: true,
        },
      ],
    },
  ];

  return (
    <footer className="py-8 border-t border-t-zinc-100 dark:border-t-zinc-900 order-3 px-6 md:px-10">
      <div className="max-w-lg mx-auto grid gap-y-14 grid-cols-2 md:grid-cols-3 justify-between">
        {footerSections.map((section) => (
          <div key={section.title}>
            <h1 className="font-medium">{section.title}</h1>
            <ul className="mt-4 space-y-2">
              {section.links.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 dark:text-zinc-600 transition-colors flex items-center gap-2 hover:text-black dark:hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-zinc-400 dark:text-zinc-600 transition-colors hover:text-black dark:hover:text-white"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex md:justify-end">
          <p className="text-zinc-400 dark:text-zinc-600 text-sm">
            © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
