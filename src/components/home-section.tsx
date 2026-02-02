"use client";
import { ChevronRightIcon } from "@radix-ui/react-icons";

export interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function HomeSection({ title, children, className }: SectionProps) {
  return (
    <section className="">
      <h3 className="mb-5 flex items-center gap-1 font-bold">{title}</h3>

      <div className={className}>{children}</div>
    </section>
  );
}
