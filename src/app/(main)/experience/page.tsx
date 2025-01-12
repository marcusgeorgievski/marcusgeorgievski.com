"use client";

import { Code } from "@/components/core/typography";
import ExperienceSection from "@/components/experience/experience-section";

export default function ExperiencePage() {
  return (
    <div className="space-y-16">
      <ExperienceSection listOnly />
      {/* <ResumeButton /> */}
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ResumeButton() {
  return (
    <button
      onClick={() => window.open("/resume.pdf")}
      className="flex gap-1.5 items-center text-slate-400"
    >
      <span className="text-xs">{">"}</span>
      <Code className="text-sm text-slate-400  hover:text-slate-100 underline underline-offset-2 decoration-slate-400">
        resume
      </Code>
    </button>
  );
}
