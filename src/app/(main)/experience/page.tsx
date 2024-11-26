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
      className="text-xs sm:text-xsflex gap-1 items-center"
    >
      📄
      <span className="underline underline-offset-2">
        <Code className="text-sm sm:text-sm text-slate-300 hover:text-slate-100">
          view resume
        </Code>
      </span>
    </button>
  );
}
