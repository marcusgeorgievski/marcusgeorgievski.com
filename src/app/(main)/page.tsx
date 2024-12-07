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
        <Link
          href={"/experience"}
          className="underline underline-offset-2 decoration-slate-600 hover:decoration-slate-500 font-semibold"
        >
          Software Developer @ KORE Solutions
        </Link>{" "}
        building an internal shareholder portal application, focusing on
        security and maintainability.
      </p>
      {/* <p>
        Currently working as a <strong>Software Developer @ Dayforce</strong> on
        the platform architecture team, focusing on building scalable and
        improving developer experience.
      </p> */}
      <p className="flex-1">
        Interested in systems design and DevOps for building high-performance
        and fault-tolerant systems. Learning <Code bg>Go</Code>,{" "}
        <Code bg>.NET</Code> and other backend technologies.
      </p>
    </div>
  );
}
