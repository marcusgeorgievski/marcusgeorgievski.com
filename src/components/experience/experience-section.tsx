"use client";

import { experiences } from "@/data/experience";
import ExperienceCard from "./experience-card";

export default function ExperienceList({ listOnly = false }) {
  return (
    <div className="flex flex-col gap-12">
      {experiences.map((exp) => (
        <ExperienceCard key={exp.company} experience={exp} />
      ))}
    </div>
  );
}
