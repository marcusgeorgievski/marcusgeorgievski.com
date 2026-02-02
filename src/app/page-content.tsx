"use client";
import {
  ExclamationTriangleIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { experiences } from "@/data/experience";
import { HomeSection } from "@/components/home-section";
import { ExperienceCard } from "@/components/experience-card";

export default function HomePageContent() {
  return (
    <div className="flex flex-col gap-20">
      <HomeHeader />

      <HomeSection title="About" className="space-y-5 text-base text-darker">
        <AboutSection />
      </HomeSection>

      <HomeSection title="Featured" className="space-y-3 text-darker">
        <FeaturedSection />
      </HomeSection>

      <HomeSection title="Experience" className="space-y-10 text-darker">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </HomeSection>
    </div>
  );
}

function HomeHeader() {
  return (
    <header>
      <h1 className="font-bold text-xl">Marcus Georgievski</h1>
      <div className="flex items-center justify-between">
        <h2 className="font-medium text-muted-foreground">
          Software Developer
        </h2>
        <div className="flex items-center gap-4">
          <Link
            href={"https://github.com/marcusgeorgievski"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Marcus Georgievski's GitHub profile"
          >
            <GitHubLogoIcon className="h-5 w-5 hover:scale-110 transition-all" />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/marcusgeorgievski"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Marcus Georgievski's LinkedIn profile"
          >
            <LinkedInLogoIcon className="h-5 w-5 hover:scale-110 transition-all" />
          </Link>
        </div>
      </div>
    </header>
  );
}

function AboutSection() {
  return (
    <>
      <ul className="list-[square] pl-3.5">
        <li>Computer Science @ University of Guelph (grad. 2027)</li>
        <li>Prev Software Developer @ Dayforce</li>
      </ul>

      <p>
        Backend development enjoyer, reading about distributed systems, playing
        around with unix systems programming and cloud.
      </p>
    </>
  );
}

function FeaturedSection() {
  return (
    <>
      <Link
        href={"https://texset.io"}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit TeXset.io"
        className="h-40 relative border rounded-lg block hover:scale-103 transition-all overflow-hidden"
      >
        <Image
          src={"/texset2.png"}
          alt="texset.io"
          fill
          className="object-cover"
        />
      </Link>

      <div>
        <Link
          href={"https://texset.io"}
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-medium"
        >
          TeXset.io
        </Link>
      </div>

      <p className="text-base">
        Currently working on a community-driven platform for discovering and
        sharing LaTeX templates, modernizing an outdated ecosystem with a
        user-focused experience.
      </p>

      <p className="text-xs text-muted-foreground flex items-center gap-1">
        <ExclamationTriangleIcon className="h-3" /> in development
      </p>
    </>
  );
}
