import Link from "next/link";
import Tag from "../ui/tag";

const skills = {
	languages: ["TypeScript", "Python", "SQL", "Java", "C++"],
	web: ["Next.js", "SQL", "React", "Prisma", "Auth"],
	tools: ["Pandas", "Selenium", "Matplotlib", "Numpy", "bs4"],
};

export default function Skills() {
	return (
		<section id="skills">
			<h3 className="pb-2 mb-3 text-4xl font-bold border-b border-slate-400 dark:border-slate-700">
				Skills
			</h3>

			<div className="grid items-center grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
				<SkillSection title="Languages" skills={skills.languages} />
				<SkillSection title="Web Dev" skills={skills.web} />
				<SkillSection title="Tools" skills={skills.tools} />
			</div>
		</section>
	);
}

interface SkillSectionProps {
	title: string;
	skills: string[];
}

function SkillSection({ title, skills }: SkillSectionProps) {
	return (
		<div className="flex items-start justify-center ">
			<h3 className="text-lg font-semibold text-black dark:text-slate-400">
				{title}
			</h3>
			<ul className="flex flex-col gap-2 pt-2 pl-8">
				{skills.map((skill) => (
					<li key={skill}>
						<Tag tagName={skill} />
					</li>
				))}
			</ul>
		</div>
	);
}
