import Hero from "@/components/hero/hero";
import Projects from "@/components/projects/projects";
import Skills from "@/components/skills/skills";

export default function Home() {
	return (
		<div className="px-6 pt-6 pb-[100px] max-w-[1000px] mx-auto flex flex-col gap-[100px] ">
			<Hero />
			<Skills />
			<Projects />
		</div>
	);
}
