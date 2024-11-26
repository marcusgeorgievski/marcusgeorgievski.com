import { cn } from "../../lib/utils";
import { jetBrainsMono } from "../../lib/fonts";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  mono?: boolean;
  children?: React.ReactNode;
};

export function PageHeader({
  title,
  subtitle,
  mono = false,
  children,
}: PageHeaderProps) {
  if (title === "/") {
    title = "/Marcus Georgievski";
  }
  return (
    <div className="flex flex-col gap-6">
      <div>
        {!mono ? (
          <h1 className="text-2xl font-bold mb-1" id={title}>
            {title[1].toUpperCase() + title.slice(2)}
          </h1>
        ) : (
          <h1
            className={cn(
              jetBrainsMono.className,
              "text-2xl font-semibold font-mono mb-1"
            )}
          >
            /{title.toLowerCase().slice(1)}
          </h1>
        )}
        {subtitle && (
          <h2 className="text-lg text-slate-200 mb-8 ">{subtitle}</h2>
        )}
      </div>
      {children && <div>{children}</div>}
    </div>
  );
}
