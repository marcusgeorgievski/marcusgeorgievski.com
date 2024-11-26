import Image from "next/image";
import Link from "next/link";
import Tag from "../core/tag";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  github?: string;
  live?: string;
  tags?: string[];
}

export default function ProjectCard({
  title,
  description,
  image,
  github,
  live,
  tags,
}: ProjectCardProps) {
  return (
    <Link
      href={live! || github!}
      target="_blank"
      className="md:gap-8 p-4 w-full h-full block transition-all hover:bg-accent/40 rounded px-4 group/project"
      aria-label={title}
    >
      <div className="mb-4">
        <p className="font-semibold text-xl mb-2">{title}</p>
      </div>
      <Image
        src={image}
        width={1200}
        height={500}
        alt={title}
        className="rounded border mb-4 aspect-video object-cover"
        priority
      />
      <div className="group-hover/project:translate-x-2 transition-all flex gap-3 flex-col">
        <p className="text-sm text-slate-400">{description}</p>
        {tags && (
          <div className="flex gap-2 flex-wrap">
            {tags.map((tag, i) => (
              <Tag key={i} tag={tag}>
                {tag}
              </Tag>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}

export function ProjectCardMinimal({
  title,
  description,
  github,
  live,
  tags,
}: ProjectCardProps) {
  return (
    <Link
      href={live! || github!}
      target="_blank"
      className="md:gap-8 p-4 w-full h-full flex transition-all hover:bg-accent/40 rounded px-4 group/project"
      aria-label={title}
    >
      <div className="group-hover/project:translate-x-2 transition-all">
        <p className="font-semibold text-lg mb-2">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
        {tags && (
          <div className="flex gap-2 mt-4 flex-wrap">
            {tags.map((tag, i) => (
              <Tag key={i} tag={tag}>
                {tag}
              </Tag>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
