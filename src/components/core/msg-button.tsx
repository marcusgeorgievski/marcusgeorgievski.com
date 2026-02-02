"use client";

import React from "react";
import { Button } from "../ui/button";
import { scrollTo } from "@/lib/utils";
import { ArrowDownIcon, HeartFilledIcon } from "@radix-ui/react-icons";

type MsgButtonProps = {
  m: string;
  messagesKey: string;
  buttonText: string;
};

export default function MsgButton({
  m,
  messagesKey,
  buttonText,
}: MsgButtonProps) {
  console.log(process.env.NEXT_PUBLIC_MESSAGES_KEY);
  return (
    <>
      {m === messagesKey && (
        <Button
          onClick={() => scrollTo("message")}
          className="flex items-center gap-2  transition-colors bg-indigo-300 text-indigo-900"
        >
          <HeartFilledIcon />
          {buttonText}
          <ArrowDownIcon />
        </Button>
      )}
    </>
  );
}
