import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollTo(section: string) {
  const element = document.getElementById(section);

  if (section == "me") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    return;
  }

  if (element) {
    const offset = window.innerWidth < 640 ? -100 : -100;

    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    const targetScrollPosition = elementPosition + offset;

    window.scrollTo({
      top: targetScrollPosition,
      behavior: "smooth",
    });
  }
}
