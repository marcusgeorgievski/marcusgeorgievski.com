"use client";

import { experiences } from "@/data/experience";
import ExperienceCard from "./experience-card";

export default function ExperienceSection({ listOnly = false }) {
  return (
    <div>
      {!listOnly && <h2 className="mb-8 font-semibold text-xl">Experience</h2>}

      <div className="flex flex-col gap-12">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.company} {...exp} />
        ))}
      </div>
    </div>
  );
}
