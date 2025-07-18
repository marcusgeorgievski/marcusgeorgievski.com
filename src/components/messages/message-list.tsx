"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import moment from "moment-timezone";
import { deleteMessage } from "@/actions/messages";
import { useTransition } from "react";
import { Message } from "@/lib/message";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import { CiGrid2H, CiGrid41 } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";

interface MessageListProps {
  messages: Message[];
}

export default function MessageList({ messages }: MessageListProps) {
  const [open, setOpen] = useState(false);
  const [grid, setGrid] = useState(true);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  function delMessage(id: number) {
    startTransition(async () => {
      await deleteMessage(id);
      router.refresh();
    });
  }

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="font-mono text-slate-600 text-xs hover:text-slate-300 flex items-center gap-2"
      >
        {open ? <LuChevronUp /> : <LuChevronDown />} messages ({messages.length}
        ){" "}
      </button>

      {open && (
        <>
          <div className="flex gap-2 mt-2">
            <button onClick={() => setGrid(true)} className="p-1">
              <CiGrid41
                className={`${
                  grid ? "text-slate-300" : "text-slate-600"
                } text-xs`}
              />
            </button>
            <button onClick={() => setGrid(false)} className="p-1">
              <CiGrid2H
                className={`${
                  grid ? "text-slate-600" : "text-slate-200"
                } text-sm`}
              />
            </button>
          </div>
          <div
            className={`grid grid-cols-1 ${
              grid && "sm:grid-cols-2"
            } mt-8 gap-10`}
          >
            {messages.map((message) => {
              const date = moment(message.createdAt)
                .tz("America/New_York")
                .format("MMM DD YYYY - hh:mm A");

              return (
                <div key={message.id} className="relative border-l-2 pl-2">
                  <div className="font-mono text-xs dark:text-slate-600 text-slate-500 mb-2">
                    <p>{message.name}</p>
                    <p>{date}</p>
                    <p className="font-mono text-xs dark:text-slate-600 text-slate-500">
                      {message.contact}
                    </p>
                  </div>

                  <p className="font-mono text-xs dark:text-slate-300 text-slate-800 text-wrap break-words ">
                    {message.body}
                  </p>

                  <button
                    disabled={isPending}
                    onClick={() => delMessage(message.id)}
                  >
                    <FaRegTrashAlt className="text-red-800 text-xs top-2 right-2 absolute opacity-60" />
                  </button>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
