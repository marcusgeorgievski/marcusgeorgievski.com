import { Experience } from "@/data/experience";
import { experienceHtmlBullets } from "@/data/helpers";
import Image from "next/image";
import Link from "next/link";

export default function ExperienceCard({
  image,
  alt,
  title,
  company,
  companyLink,
  from,
  to,
  location,
  description,
  bullets,
}: Experience) {
  function getInfo() {
    const res = experienceHtmlBullets(company);

    if (res != null) {
      return res;
    }
    if (bullets) {
      return (
        <ul className="space-y-1">
          {bullets.map((responsibility, index) => (
            <li
              key={index}
              className="ml-[53px] sm:ml-[56px] text-slate-300 list-disc"
            >
              {responsibility}
            </li>
          ))}
        </ul>
      );
    }

    if (description) {
      return (
        <ul className="space-y-1">
          <li className="ml-[53px] sm:ml-[56px] text-slate-300 list-disc">
            {description}
          </li>
        </ul>
      );
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex sm:gap-3 gap-4 items-start">
        <Image
          src={image}
          alt={alt}
          width={80}
          height={80}
          className="rounded-sm sm:w-[30px] w-[23px] sm:h-[30px] h-[23px]"
        />

        <div className="gap-0.5 ">
          <div className="flex items-center">
            <h3 className="sm:text-lg text-base leading-tight sm:mb-1 mb-2">
              {title} @{" "}
              <Link
                href={companyLink}
                className="border-b border-zinc-600 hover:border-zinc-400"
              >
                {company}
              </Link>
            </h3>
          </div>
          <p className="sm:text-[15px] text-[13px] font-light text-slate-400 leading-tight">
            <span className="whitespace-nowrap">
              {from} – {to}
            </span>{" "}
            <span className="text-zinc-500 sm:px-1.5 px-1">·</span>{" "}
            <span className="whitespace-nowrap">{location}</span>{" "}
          </p>
        </div>
      </div>

      {getInfo()}
    </div>
  );
}
