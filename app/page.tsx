import Hero from "@/components/hero/hero";
import Message from "@/components/message/message";
import Projects from "@/components/projects/projects";
import Skills from "@/components/skills/skills";

export default function Home({ searchParams }: { searchParams: any }) {
	console.log(searchParams);
	return (
		<div className="px-6 sm:pt-6 pb-[100px] max-w-[1000px] mx-auto flex flex-col gap-[100px] ">
			<Hero />
			<Skills />
			<Projects />
			<Message view={searchParams.msg} />
		</div>
	);
}
