"use client";

import { Button } from "@/components/ui/button";
import ReadingListTable from "./reading-list";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ReadingListPage() {
  return (
    <div className="flex flex-col gap-8">
      <BackLink href="/" label="Home" />

      <h1 className="text-2xl font-bold">Reading List</h1>

      <ReadingListTable />
    </div>
  );
}

import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { cn } from "@/lib/utils";

function BackLink({ href, label }: { href: string; label: string }) {
  const SCROLL_THRESHOLD = 30;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
      console.log(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "md:sticky top-14  z-10 transition-transform",
        scrolled && "md:-translate-x-24"
      )}
    >
      <Link href={href}>
        <Button variant="ghost">
          <HiOutlineArrowNarrowLeft />
          {label}
        </Button>
      </Link>
    </div>
  );
}
