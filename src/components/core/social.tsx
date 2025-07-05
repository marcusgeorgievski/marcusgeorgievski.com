"use client";
import { Social, socials } from "@/data/socials";
import Link from "next/link";

export function Socials() {
  return (
    <div className="flex gap-4">
      {socials.map((social: Social, index: number) => (
        <SocialIcon key={index} social={social} index={index} />
      ))}
    </div>
  );
}

export function SocialIcon({
  social,
  index,
}: {
  social: Social;
  index: number;
}) {
  const Icon = social.icon;
  return (
    <Link
      key={index}
      href={social.href}
      target="_blank"
      aria-label={social.ariaLabel}
    >
      <Icon
        height={17}
        width={17}
        className="hover:scale-[1.2]   transition-all"
      />
    </Link>
  );
}
