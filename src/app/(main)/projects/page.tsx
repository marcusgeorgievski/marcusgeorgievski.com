import { Code } from "@/components/core/typography";
import Projects from "@/components/projects/projects-section";

export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      <p className="text">
        Currently working on <Code>bytes</Code> to expand my understanding of
        software development through practical, focused projects.
      </p>

      <Projects listOnly />
    </div>
  );
}
