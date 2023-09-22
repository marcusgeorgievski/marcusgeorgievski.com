"use client";
import Link from "next/link";
import Image from "next/image";
import ProjectCard from "./project-card";

export interface Project {
	title: string;
	description: string;
	image: string;
	video: string | null;
	link: string;
	repo: string;
	tags: string[];
}

const projects: Project[] = [
	{
		title: "OpenAI GPT Chatbot",
		description:
			"AI chatbot developed using OpenAI's GPT API to create an advanced shop assistant",
		image: "chatbotImage.png",
		video: "chatbotVideo.mov",
		link: "https://openai-chatbot-demo.vercel.app/",
		repo: "https://github.com/marcusgeorgievski/openai-chatbot",
		tags: ["OpenAI", "Redis", "React Query", "Next.js", "TypeScript"],
	},
	{
		title: "CodeHome",
		description:
			"Full stack platform for users to create, explore, and showcase any coding relating projects",
		image: "codehomeImage.png",
		video: "codehomeVideo.mov",
		link: "https://codehome.app/",
		repo: "https://github.com/marcusgeorgievski/codeHome",
		tags: ["Next.js", "React", "SQL", "Prisma", "Auth", "TypeScript"],
	},
	{
		title: "Indeed Skill Scrape",
		description:
			"Parse job posting data based on provided job title and interested technical skills",
		image: "skillScrape.png",
		video: null,
		link: "https://github.com/marcusgeorgievski/indeed-skill-scrape",
		repo: "https://github.com/marcusgeorgievski/indeed-skill-scrape",
		tags: ["Python", "Selenium", "Pandas", "bs4", "Matplotlib"],
	},
	{
		title: "Github",
		description: "More of my code here!",
		image: "github.png",
		video: null,
		link: "https://github.com/marcusgeorgievski",
		repo: "",
		tags: [],
	},
];

export default function Projects() {
	return (
		<section id="projects">
			<div className="mb-6">
				<h3 className="text-4xl font-bold border-b pb-2 mb-3  border-slate-400 dark:border-slate-700">
					Projects
					<p className="font-mono dark:text-green-400 text-blue-600 text-xs font-thin mt-1">
						Hover/click on an image to watch a preview
					</p>
				</h3>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2  gap-20">
				{projects.map((project) => (
					<div key={project.link}>
						<ProjectCard project={project} />
					</div>
				))}
			</div>
		</section>
	);
}
