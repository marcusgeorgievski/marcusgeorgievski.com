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
      <ul className="list-disc list-inside">
        <li>
          Software Developer @ <strong>Dayforce</strong>
        </li>
        <li>
          Computer Science @ <strong>University of Guelph</strong>
        </li>
      </ul>

      <p className="flex-1">
        Interested in distributed systems and DevOps for building
        high-performance and fault-tolerant systems. Looking to eventually dive
        deeper into systems programming and low-level development.
      </p>

      <p>
        See what I else I&apos;ve done{" "}
        <Link
          href={"/experience"}
          className="underline underline-offset-2 text-indigo-400 hover:text-indigo-500"
        >
          here
        </Link>
        .
      </p>
    </div>
  );
}
