"use client";
import NotesSection from "@/components/notes/notes-section";
import { Button } from "@/components/ui/button";
import { readingList } from "@/data/notes";
import Link from "next/link";
import { useState } from "react";

export default function NotesPage() {
  return (
    <div className="space-y-10">
      <NotesList />
      <NotesSection listOnly />
    </div>
  );
}

function NotesList() {
  const [showAll, setShowAll] = useState(false);

  const readingListToShow = showAll ? readingList : readingList.slice(0, 5);

  return (
    <div className="text-sm sm:text-base text-slate-400 leading-7 flex flex-col gap-2">
      <p>Reading list:</p>

      <ul className="list-disc pl-6 space-y-0.5">
        {readingListToShow.slice().map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              target="_blank"
              className="underline underline-offset-2 decoration-slate-700 hover:decoration-slate-500"
            >
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

      <div className="pl-2">
        <Button
          variant="link"
          className="text-indigo-400 underline underline-offset-2"
          onClick={() => setShowAll(showAll ? false : true)}
        >
          {showAll ? "hide some" : "show all"}
        </Button>
      </div>
    </div>
  );
}
