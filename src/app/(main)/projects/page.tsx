import { Code, Text } from "@/components/core/typography";
import Projects from "@/components/projects/projects-section";

export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      <Text>
        Currently working on <Code>bytes</Code> to expand my understanding of
        modern software development through practical, focused projects. Each
        byte tackles a fundamental concept that can be applied to larger
        production systems.
      </Text>

      <Projects listOnly />
    </div>
  );
}
