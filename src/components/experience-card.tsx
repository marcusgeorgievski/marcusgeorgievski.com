"use client";
import Link from "next/link";

export interface ExperienceCardProps {
  role: string;
  company: string;
  companyUrl: string;
  startDate: string;
  endDate: string;
  highlight: string;
  description: string;
}

export function ExperienceCard({
  role,
  company,
  companyUrl,
  startDate,
  endDate,
  highlight,
  description,
}: ExperienceCardProps) {
  return (
    <div className="group relative pl-4 border-l-2 border-border hover:border-primary/50 transition-colors duration-200">
      {/* Header */}
      <div className="mb-2 text-foreground">
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
      <p className="text-sm sm:text-[15px]">
        {highlight} {description}
      </p>
    </div>
  );
}
