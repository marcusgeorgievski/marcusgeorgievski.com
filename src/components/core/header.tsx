"use client";
import { routes, socials, Social, Route } from "@/data/core";
import { cn } from "../../lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { jetBrainsMono } from "@/lib/fonts";

export default function Header() {
  const [currSection, setCurrSection] = useState("me");
  const [scrolling, setScrolling] = useState(false);
  const sections = Array.from(routes, (route) => route.label);

  function getActiveSection() {
    let activeSection = currSection;

    sections.forEach((section) => {
      const element = document.getElementById(section);

      const top = document.documentElement.scrollTop;

      console.log(top);
      if (top > 60) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }

      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 175) {
          activeSection = section;
        }
      }
    });

    return activeSection;
  }

  useEffect(() => {
    const handleScroll = () => {
      setCurrSection(getActiveSection());
    };

    const curr = window.scrollY;
    console.log(curr);
    if (curr > 60) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="max-w-[800px] sticky top-6 z-40">
      <header
        className={cn(
          "sm:w-full w-full py-2 rounded-lg flex gap-4 mx-auto z-40 sm:justify-between px-2 \
          backdrop-blur-none transition-all bg-transparent border border-transparent",
          scrolling &&
            "bg-[#0c0c0c]/90 border-zinc-900 backdrop-blur-sm transition-all"
        )}
      >
        <nav className={"flex sm:gap-3 gap-2"}>
          {routes.map((route) => (
            <RouteLink key={route.path} route={route} />
          ))}
        </nav>

        <nav className="items-center gap-4 text-slate-300 sm:flex hidden">
          {socials.map((social, index) => (
            <SocialIcon key={index} social={social} index={index} />
          ))}
        </nav>
      </header>
    </div>
  );
}

function RouteLink({ route }: { route: Route }) {
  const pathname = usePathname();

  const isCurrentRoute = pathname === route.path;

  // ? "text-[#8eb0ff] bg-[#11275c] font-medium"
  return (
    <Link
      href={route.path}
      className={cn(
        jetBrainsMono.className,
        "px-3 py-0.5 rounded-full transition-all text-xs",
        isCurrentRoute
          ? "text-[#8eb0ff] bg-[#11275c] font-medium"
          : "text-slate-300 hover:text-slate-50"
      )}
    >
      {/* / */}
      {route.label}
    </Link>
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
        className="hover:scale-[1.2]  hover:text-white transition-all"
      />
    </Link>
  );
}
