import Link from "next/link";
import { Project } from "./projects";
import Image from "next/image";
import Tag from "../ui/tag";
import { AiFillGithub } from "react-icons/ai";

interface ProjectCardProps {
	project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
	return (
		<div className="flex flex-col gap-1 ">
			<div className="rounded-lg overflow-hidden mb-2 border border-slate-300 shadow-lg">
				{project.video ? (
					<video
						poster={project.image}
						onMouseOver={(event: any) => event.target.play()}
						onMouseOut={(event: any) => event.target.load()}
						src={project.video}
						muted
					></video>
				) : (
					<img src={project.image} alt={project.title} />
				)}
			</div>

			{/* TAGS */}
			<div className="flex gap-x-1 gap-y-[1px] flex-wrap gap">
				{project.tag.map((tag) => (
					<span key={tag}>
						<Tag tagName={tag} />
					</span>
				))}
			</div>

			{/* DETAILS */}
			<div>
				<h3 className="text-2xl font-semibold">{project.title}</h3>

				<p className="font-medium dark:text-slate-400 text-slate-600 leading-7 mb-4">
					{project.description}
				</p>

				<div className="flex gap-2">
					{!project.link.includes("github") && (
						<Link
							href={project.link}
							target="_blank"
							className="rounded border border-slate-300 shadow-md  py-1 px-2 dark:text-slate-400 hover:bg-slate-100 text-black inline-flex font-mono text-xs items-center gap-2 dark:hover:bg-slate-900"
						>
							<span className="rounded-full bg-red-600 w-2 h-2 animate-pulse "></span>
							Live
						</Link>
					)}
					<Link
						href={project.repo}
						target="_blank"
						className="rounded border border-slate-400 p-1 inline-flex hover:bg-slate-100 shadow"
					>
						<AiFillGithub />
					</Link>
				</div>
			</div>
		</div>
	);
}
