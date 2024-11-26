import { Code } from "@/components/core/typography";
import MessageSection from "@/components/messages/message-section";

import Link from "next/link";

interface HomePageProps {
  searchParams?: {
    foo?: string;
    m?: string;
  };
}

export default function HomePage({ searchParams }: HomePageProps) {
  if (!searchParams) {
    return null;
  }

  const { foo, m } = searchParams;

  return (
    <div>
      <HomeContent />

      {(m || foo) && (
        <div className="mt-16 mb-10">
          <MessageSection m={m} foo={foo} />
        </div>
      )}
    </div>
  );
}

function HomeContent() {
  return (
    <div className="space-y-6 text">
      <p>
        Computer Science student at the <strong>University of Guelph</strong>.
      </p>

      <p>
        Currently working as a{" "}
        <strong>Software Developer @ KORE Solutions</strong> developing an
        internal shareholder portal application, focusing on security and
        maintainability.
      </p>

      {/* <p>
        Currently working as a <strong>Software Developer @ Dayforce</strong> on
        the platform architecture team, focusing on building scalable and
        improving developer experience.
      </p> */}

      <p className="flex-1">
        Passionate about systems design and DevOps for building high-performant,
        fault-tolerant systems. Learning <Code bg>Go</Code>,{" "}
        <Code bg>.NET</Code> and other backend technologies.
      </p>

      <div className="space-y-2">
        <p>Here you can find my...</p>
        <ul className="list-disc pl-5">
          <li>
            Work <PageLink href="/experience">experience</PageLink> and resume
          </li>
          <li>
            <PageLink href="/projects">Projects</PageLink> I&apos;m working on
          </li>
          <li>
            <PageLink href="/notes">Notes</PageLink> on what I&apos;m reading
          </li>
        </ul>
      </div>
    </div>
  );
}

interface PageLinkProps {
  children: React.ReactNode;
  href: string;
}

function PageLink({ children, href }: PageLinkProps) {
  return (
    <Link href={href} className="underline underline-offset-2 text-indigo-400">
      {children}
    </Link>
  );
}
