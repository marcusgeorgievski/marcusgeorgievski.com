"use client";
interface SectionProps {
  title: string;
  children?: React.ReactNode;
  showTitle?: boolean;
}

export default function Section({
  title,
  children,
  showTitle = true,
}: SectionProps) {
  return (
    <div>
      {showTitle && <h2 className="mb-6 font-semibold text-base">{title}</h2>}

      <div>{children}</div>
    </div>
  );
}
