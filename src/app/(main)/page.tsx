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
        Student at the <strong>University of Guelph</strong> studying Computer
        Science.
      </p>

      <p>
        Currently working as a{" "}
        <strong>Software Developer @ KORE Solutions</strong> working on an
        internal shareholder portal application, focusing on security and
        maintainability.
      </p>

      {/* <p>
        Currently working as a <strong>Software Developer @ Dayforce</strong> on
        the platform architecture team, focusing on building scalable and
        improving developer experience.
      </p> */}

      <p className="flex-1">
        Passionate about Systems Design and DevOps, focusing on building
        high-performance, fault-tolerant systems with exceptional user
        experience. Currently learning <Code bg>Go</Code>, <Code bg>.NET</Code>{" "}
        and other backend technologies.
      </p>

      <p className="text">
        You can find my work <PageLink href="/experience">experiences</PageLink>
        , <PageLink href="/projects">projects</PageLink> I&apos;m working on,
        and <PageLink href="/notes">notes</PageLink> on what I&apos;m reading.
      </p>
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
