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
			<div className="mb-2 overflow-hidden border rounded-lg shadow-lg border-slate-400 dark:border-slate-400/20">
				{project.video ? (
					<video
						poster={project.image}
						onMouseOver={(event: any) => event.target.play()}
						onClick={(event: any) => event.target.play()}
						onMouseOut={(event: any) => event.target.load()}
						src={project.video}
						muted
					></video>
				) : (
					<img src={project.image} alt={project.title} />
				)}
			</div>

			{/* TAGS */}
			{project.tags.length > 0 && (
				<div className="flex gap-x-1 gap-y-[1px] flex-wrap gap">
					{project.tags.map((tag) => (
						<span key={tag}>
							<Tag tagName={tag} />
						</span>
					))}
				</div>
			)}

			{/* DETAILS */}
			<div>
				<h3 className="text-2xl font-semibold">{project.title}</h3>

				<p className="mb-4 font-medium dark:text-slate-400 text-slate-600 leading-7">
					{project.description}
				</p>

				<div className="flex gap-2">
					{!project.link.includes("github") && (
						<Link
							href={project.link}
							target="_blank"
							className="rounded border dark:border-slate-400 border-slate-300 shadow-md  py-1 px-2 dark:text-slate-400 hover:bg-slate-100 text-black inline-flex font-mono text-xs items-center gap-2 dark:hover:bg-slate-900 hover:scale-[1.04]"
						>
							<span className="w-2 h-2 bg-red-600 rounded-full animate-pulse "></span>
							Live
						</Link>
					)}
					<Link
						href={project.repo}
						target="_blank"
						className="rounded border border-slate-400 p-1 inline-flex hover:bg-slate-100 dark:hover:bg-slate-800 shadow hover:scale-[1.04]"
					>
						<AiFillGithub />
					</Link>
				</div>
			</div>
		</div>
	);
}
