"use client";

import { Code } from "@/components/core/typography";
import ExperienceSection from "@/components/experience/experience-section";

export default function ExperiencePage() {
  return (
    <div className="space-y-16">
      <ResumeButton />

      <ExperienceSection listOnly />
    </div>
  );
}

function ResumeButton() {
  return (
    <button
      onClick={() => window.open("/resume.pdf")}
      className="text-xs sm:text-xs flex gap-1.5 items-center"
    >
      <span>📄</span>
      <span className="border-b border-slate-400 hover:border-slate-100">
        <Code className="text-sm sm:text-sm text-slate-400  hover:text-slate-100">
          view resume
        </Code>
      </span>
    </button>
  );
}
