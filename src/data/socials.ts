import { IconType } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export type Social = {
  label: string;
  icon: IconType;
  href: string;
  ariaLabel: string;
};

export const socials: Social[] = [
  {
    label: "GitHub",
    icon: FaGithub,
    href: "https://github.com/marcusgeorgievski",
    ariaLabel: "GitHub link",
  },
  {
    label: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/marcusgeorgievski",
    ariaLabel: "LinkedIn link",
  },
];
