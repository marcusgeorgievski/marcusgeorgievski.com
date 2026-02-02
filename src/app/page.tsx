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
            <Link href={"https://github.com/marcusgeorgievski"} target="_blank">
              <GitHubLogoIcon className="h-5 w-5 hover:scale-110 transition-all" />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/marcusgeorgievski"}
              target="_blank"
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
        <ExperienceCard
          role="Software Developer"
          company="Dayforce"
          companyUrl="https://www.dayforce.com/"
          startDate="Jan 2025"
          endDate="Aug 2025"
          highlight="Developer Experience Engineering."
          description="Worked on infrastructure automation, microservice onboarding processes, and internal tooling for code quality improvements."
        />

        <ExperienceCard
          role="Software Developer Intern"
          company="KORE Solutions"
          companyUrl="https://kore.solutions/"
          startDate="Sep 2024"
          endDate="Dec 2024"
          highlight="Internal Business Applications."
          description="Developed an MVP for a secure internal application for employee stock management and administrative allocation workflows."
        />

        <ExperienceCard
          role="Full-Stack Developer, contract"
          company="Seneca Polytechnic"
          companyUrl="https://www.senecapolytechnic.ca/innovation/research.html"
          startDate="Jun 2024"
          endDate="Aug 2024"
          highlight="Applied Research Portal."
          description="Optimized database operations, implemented efficient data fetching patterns, and architected application routing for a research portal."
        />
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
          <Link href={companyUrl} className="underline">
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
