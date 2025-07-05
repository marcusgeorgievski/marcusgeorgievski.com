import { Experience } from "@/data/experience";
// import { experienceHtmlBullets } from "@/data/helpers";
import Image from "next/image";
import Link from "next/link";

type ExperienceCardProps = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="flex gap-3">
      <Image
        src={experience.image}
        alt={experience.alt || "Company Logo"}
        width={80}
        height={80}
        className="rounded-sm sm:w-[30px] w-[23px] sm:h-[30px] h-[23px]"
      />

      <div>
        <Title />
        <Date />
        <Description />
      </div>
    </div>
  );

  function Title() {
    return (
      <h3 className="sm:text-lg text-base font-medium leading-tight sm:mb-1 mb-2">
        {experience.position} •{" "}
        <Link
          href={experience.companyLink}
          target="_blank"
          className="underline underline-offset-2 decoration-slate-700 hover:decoration-slate-400"
        >
          {experience.company}
        </Link>
      </h3>
    );
  }

  function Date({ location = false }: { location?: boolean }) {
    return (
      <p className="sm:text-[15px] text-[13px] font-light text-slate-500 leading-tight mb-2">
        <span className="whitespace-nowrap">
          {experience.from} – {experience.to}
        </span>{" "}
        {location && (
          <>
            <span className="sm:px-1.5 px-1">·</span>{" "}
            <span className="whitespace-nowrap">{experience.location}</span>{" "}
          </>
        )}
      </p>
    );
  }

  function Description() {
    return <p className="text-slate-300 text-sm">{experience.description}</p>;
  }
}
