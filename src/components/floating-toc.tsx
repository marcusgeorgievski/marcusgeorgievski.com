"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "featured", label: "Featured" },
  { id: "experience", label: "Experience" },
];

export function FloatingTOC() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        {
          // Trigger when section crosses near top of viewport
          rootMargin: "-40% 0px -60% 0px",
          threshold: 0,
        },
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const handleClick = (id: string) => {
    // About is the top section, so scroll to page top instead
    if (id === "about") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="hidden xl:block fixed left-8 top-1/4 z-50">
      <ul className="flex flex-col gap-3 text-sm">
        {sections.map(({ id, label }) => (
          <li key={id}>
            <button
              onClick={() => handleClick(id)}
              className={`transition-colors duration-200 hover:text-foreground ${
                activeSection === id
                  ? "text-foreground font-medium"
                  : "text-muted-foreground/50"
              }`}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
