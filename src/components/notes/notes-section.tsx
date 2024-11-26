"use client";
import { notes } from "@/data/notes";
import NoteCard from "./note-card";

export default function NotesSection({ listOnly = false }) {
  return (
    <div>
      {!listOnly && <h2 className="mb-8 font-semibold text-xl">Notes</h2>}

      <div className="flex flex-col gap-10">
        {notes.map((note) => (
          <NoteCard key={note.title} {...note} />
        ))}
      </div>
    </div>
  );
}
