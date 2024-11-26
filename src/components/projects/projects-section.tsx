"use client";
import { cn } from "../../lib/utils";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import ProjectCard, { ProjectCardMinimal } from "./project-card";
import { projects } from "@/data/projects";
import { Button } from "../ui/button";

export default function Projects({
  className,
  listOnly = false,
}: {
  className?: string;
  listOnly?: boolean;
}) {
  const [visibleProjects, setVisibleProjects] = useState([
    ...projects.slice(0, 4),
  ]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-0px 0px" });

  return (
    <div className={cn(className)} id="projects">
      {!listOnly && <h2 className="mb-6 font-semibold text-xl">Projects</h2>}

      <section
        className={cn("grid grid-cols-1 sm:grid-cols-2  gap-8")}
        ref={ref}
      >
        {visibleProjects.map((project, index) => (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 1 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            key={index}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </section>

      {visibleProjects.length !== projects.length && (
        <div className="flex justify-center mb-6 mt-10">
          <Button
            className="w-full"
            variant={"ghost"}
            onClick={() => {
              setVisibleProjects([
                ...visibleProjects,
                ...projects.slice(
                  visibleProjects.length,
                  visibleProjects.length + 4
                ),
              ]);
            }}
          >
            Show more
          </Button>
        </div>
      )}
    </div>
  );
}

export function ProjectsMinimal({ className }: { className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <div className={cn(className)} id="projects">
      <h2 className="mb-6 font-semibold text-xl">Projects</h2>

      <section className={cn("flex flex-col  gap-8")} ref={ref}>
        {projects.map((project, index) => (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 1 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            key={index}
          >
            <ProjectCardMinimal {...project} />
          </motion.div>
        ))}
      </section>
    </div>
  );
}
