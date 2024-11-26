import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Tag from "../core/tag";
import { Note } from "@/data/notes";

export default function NoteCard({ title, description, link, tags }: Note) {
  return (
    <Link
      href={link}
      target="_blank"
      className="md:gap-8 p-2 w-full h-full py-3 block transition-all hover:bg-accent/40 rounded  group/project"
      aria-label={title}
    >
      <div className="group-hover/project:translate-x-2 transition-all">
        <div className="font-semibold text-lg mb-2 flex items-center gap-3">
          {title} <ArrowTopRightIcon />
        </div>
        <p className="text-sm text-slate-400 text-muted-foreground">
          {description}
        </p>
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
