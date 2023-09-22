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
			<h2 className="text-3xl font-semibold border-b pb-2 mb-3  border-slate-400 dark:border-slate-700">
				Skills
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-10">
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
		<div className="flex justify-center items-start ">
			<h3 className="text-lg font-semibold dark:text-slate-400 text-black">
				{title}
			</h3>
			<ul className="pl-8 flex flex-col gap-2 pt-2">
				{skills.map((skill) => (
					<li key={skill}>
						<Tag tagName={skill} />
					</li>
				))}
			</ul>
		</div>
	);
}
