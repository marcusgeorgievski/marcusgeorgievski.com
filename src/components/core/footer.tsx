import React from "react";
import { SocialIcon } from "./header";
import { socials } from "@/data/core";
import { Code } from "./typography";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="pb-10 opacity-60 mt-6">
      <nav className="items-center gap-4 text-slate-400 flex flex-col w-full">
        {socials.map((social, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-between w-full"
            >
              <div className="flex gap-2 items-center">
                <SocialIcon social={social} index={index} /> {social.label}
              </div>
              <span className="flex-grow border-t border-dotted border-slate-600 mx-2"></span>
              <Link
                href={social.href}
                target="_blank"
                className="underline underline-offset-2"
              >
                <Code className="space-x-0.5 text-slate-400">
                  <span>@</span>
                  <span>{social.tag.slice(1)}</span>
                </Code>
              </Link>{" "}
            </div>
          );
        })}
      </nav>
    </div>
  );
}
