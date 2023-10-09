import Hero from "@/components/hero/hero";
import Messages from "@/components/message/messages";
import Projects from "@/components/projects/projects";
import Skills from "@/components/skills/skills";
import { Suspense } from "react";

export default function Home({ searchParams }: { searchParams: any }) {
	return (
		<div className="px-6 sm:pt-6 pb-[100px] max-w-[1000px] mx-auto flex flex-col gap-[100px] ">
			<Hero />
			<Skills />
			<Projects />

			<Suspense fallback={<div>Loading...</div>}>
				<Messages view={searchParams.msg} />
			</Suspense>
		</div>
	);
}
