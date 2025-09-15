import MsgButton from "@/components/core/msg-button";
import Section from "@/components/core/section";
import { Socials } from "@/components/core/social";
import ExperienceSection from "@/components/experience/experience-list";
import MessageSection from "@/components/messages/message-section";
import { FaGraduationCap } from "react-icons/fa6";
import { TbBriefcase2Filled } from "react-icons/tb";

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ foo?: string; m?: string }>;
}) {
  // Button specific logic. secret.
  const { foo, m } = await searchParams;
  const messagesKey = process.env.MESSAGES_KEY;
  const buttonText = process.env.BUTTON;
  const btnProps = {
    m: m || "",
    messagesKey: messagesKey || "",
    buttonText: buttonText || "",
  };

  return (
    <section className="flex flex-col gap-14">
      {m === process.env.MESSAGES_KEY && (
        <div>
          <MsgButton {...btnProps} />
        </div>
      )}

      <Header />

      <Section title="About">
        <About />
      </Section>

      <Section title="Experience">
        <ExperienceSection listOnly={true} />
      </Section>

      <MessageSection foo={foo} m={m} />
    </section>
  );
}

function Header() {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold mb-1" id="/Marcus Georgievski">
        Marcus Georgievski
      </h1>
      <div className="flex items-center justify-between text-slate-500">
        <h2 className="text-lg text-slate-500">Software Developer</h2>
        <Socials />
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="flex flex-col gap-4 text-slate-300">
      <ul className="list-disc pl-0">
        <li className="flex items-center gap-3">
          <FaGraduationCap /> Computer Science @ University of Guelph
        </li>
        <li className="flex items-center gap-3">
          <TbBriefcase2Filled /> Prev Software Developer @ Dayforce
        </li>
      </ul>

      <p>
        Interested in distributed systems and the challenges of building
        resilient, fault-tolerant architectures that maintain performance at
        scale.
      </p>
    </div>
  );
}
