"use client";
import {
  ChevronRightIcon,
  ExclamationTriangleIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { experiences } from "@/data/experience";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-20">
      <header>
        <h1 className="font-bold text-xl">Marcus Georgievski</h1>
        <div className="flex items-center justify-between">
          <h2 className="font-medium text-muted-foreground">
            Software Developer
          </h2>
          <div className="flex items-center gap-4">
            <Link
              href={"https://github.com/marcusgeorgievski"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Marcus Georgievski's GitHub profile"
            >
              <GitHubLogoIcon className="h-5 w-5 hover:scale-110 transition-all" />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/marcusgeorgievski"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Marcus Georgievski's LinkedIn profile"
            >
              <LinkedInLogoIcon className="h-5 w-5 hover:scale-110 transition-all" />
            </Link>
          </div>
        </div>
      </header>

      <Section title="About" className="space-y-5 text-sm">
        <ul className="list-[square] pl-3.5">
          <li>Computer Science @ University of Guelph (grad. 2027)</li>
          <li>Prev Software Developer @ Dayforce</li>
        </ul>

        <p>
          Backend development enjoyer, reading about distributed systems,
          playing around with unix systems programming and cloud.
        </p>
      </Section>

      <Section title="Featured" className="space-y-3">
        <Link
          href={"https://texset.io"}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit TeXset.io"
          className="h-40 relative border rounded-lg block hover:scale-103 transition-all overflow-hidden"
        >
          <Image
            src={"/texset2.png"}
            alt="texset.io"
            fill
            className="object-cover"
          />
        </Link>

        <div>
          <Link
            href={"https://texset.io"}
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-bold animate-accordion-up"
          >
            TeXset.io
          </Link>
        </div>

        <p className="text-sm">
          Currently working on a community-driven platform for discovering and
          sharing LaTeX templates, modernizing an outdated ecosystem with a
          user-focused experience.
        </p>

        <p className="text-xs text-muted-foreground flex items-center gap-1">
          <ExclamationTriangleIcon className="h-3" /> in development
        </p>
      </Section>

      <Section title="Experience" className="space-y-10">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </Section>
    </div>
  );
}

export interface ExperienceCardProps {
  role: string;
  company: string;
  companyUrl: string;
  startDate: string;
  endDate: string;
  highlight: string;
  description: string;
}

function ExperienceCard({
  role,
  company,
  companyUrl,
  startDate,
  endDate,
  highlight,
  description,
}: ExperienceCardProps) {
  return (
    <div>
      {/* Header */}
      <div className="mb-2">
        <p className="font-medium">
          {role} @{" "}
          <Link
            href={companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            {company}
          </Link>
        </p>
        <p className="text-xs text-muted-foreground/90">
          {startDate} &mdash; {endDate}
        </p>
      </div>

      {/* Description */}
      <p className="text-[13px]">
        {highlight} {description}
      </p>
    </div>
  );
}

// Section Component
interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

function Section({ title, children, className }: SectionProps) {
  return (
    <section className="pl-5">
      <h3 className="-ml-5 mb-5 flex items-center gap-1 font-bold">
        <ChevronRightIcon />
        {title}
      </h3>

      <div className={className}>{children}</div>
    </section>
  );
}
