import NotesSection from "@/components/notes/notes-section";
import { readingList } from "@/data/notes";
import Link from "next/link";

export default function NotesPage() {
  return (
    <div className="space-y-10">
      <NotesList />
      <NotesSection listOnly />
    </div>
  );
}

function NotesList() {
  return (
    <div className="text-sm sm:text-base text-slate-400 leading-7 flex flex-col gap-2">
      <p>Reading list:</p>

      <ul className="list-disc pl-6 space-y-0.5">
        {readingList.map((item, index) => (
          <li key={index}>
            <Link href={item.href} className="border-b hover:border-zinc-700">
              {item.title}
            </Link>
            {item.status && (
              <span className="px-3 ml-2 bg-indigo-950 rounded-full py-[1px] text-indigo-300 text-xs font-semibold">
                {item.status}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
