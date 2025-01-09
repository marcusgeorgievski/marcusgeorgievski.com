import { ForwardRefExoticComponent, RefAttributes } from "react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { IconProps } from "@radix-ui/react-icons/dist/types";

export type Route = {
  label: string;
  path: string;
};

export type Social = {
  tag?: string;
  label: string;
  href: string;
  ariaLabel: string;
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
};

export const routes: Route[] = [
  { label: "me", path: "/" },
  { label: "experience", path: "/experience" },
  // { label: "projects", path: "/projects" },
  { label: "notes", path: "/notes" },
];

export const socials: Social[] = [
  {
    tag: "@marcusgeorgievski",
    label: "GitHub",
    ariaLabel: "GitHub link",
    href: "https://github.com/marcusgeorgievski",
    icon: GitHubLogoIcon,
  },
  {
    tag: "@marcusgeorgievski",
    label: "LinkedIn",
    ariaLabel: "LinkedIn link",
    href: "https://www.linkedin.com/in/marcusgeorgievski",
    icon: LinkedInLogoIcon,
  },
];
