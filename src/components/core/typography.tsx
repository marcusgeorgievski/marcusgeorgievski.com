import { jetBrainsMono } from "../../lib/fonts";
import { cn } from "../../lib/utils";

export function Text({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <p className="text-base text-slate-400 leading-7">{children}</p>;
}

interface CodeProps {
  children: React.ReactNode;
  className?: string;
  bg?: boolean;
}

export function Code({ children, className, bg = false }: CodeProps) {
  return (
    <span
      className={cn(
        jetBrainsMono.className,
        bg && "bg-zinc-800",
        "text-sm tracking-wide text-slate-300 leading-7  rounded-sm px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
}
