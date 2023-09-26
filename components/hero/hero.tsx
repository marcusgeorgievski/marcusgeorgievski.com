"use client";
import Tag from "../ui/tag";
import Terminal from "./terminal";
import Typer from "./typewriter-1";
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Link from "next/link";
import { scrollTo } from "@/lib/utils";

export default function Hero() {
	return (
		<section
			id="home"
			className="grid items-center grid-cols-1 gap-8 pt-8 md:grid-cols-2"
		>
			<div className="">
				<h3 className="text-4xl  font-bold bg-gradient-to-r from-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">
					Welcome
				</h3>
				<p className="-ml-3">
					<Typer />
				</p>

				<div className="flex gap-2 mt-6 text-xl">
					<Link
						href="https://github.com/marcusgeorgievski"
						target="_blank"
						className="p-[6px] inline-flex border rounded border-blue-600 text-blue-600 hover:bg-blue-500/20 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-400/20 hover:scale-[1.04]"
					>
						<AiFillGithub />
					</Link>
					<Link
						href="https://www.linkedin.com/in/marcusgeorgievski/"
						target="_blank"
						className="p-[6px] inline-flex border rounded border-blue-600 text-blue-600 hover:bg-blue-500/20 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-400/20 hover:scale-[1.04]"
					>
						<AiFillLinkedin />
					</Link>
					<a
						href="mailto:marcusgeorgievski@outlook.com"
						target="_blank"
						className="p-[6px] inline-flex border rounded border-blue-600 text-blue-600 hover:bg-blue-500/20 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-400/20 hover:scale-[1.04]"
					>
						<MdEmail />
					</a>
				</div>
			</div>
			<div className="grid gap-8 pt-8">
				<Terminal className="text-white w-full max-w-[500px] shadow-lg">
					<p>
						<span className="text-green-400">
							marcusgeorgievski ~
						</span>{" "}
						<span className="text-red-500">$</span> curl
						marcusgeorgievski.com
						<span className="animate-blink">|</span>
					</p>

					<div className="flex flex-col gap-2 py-2 pl-6">
						<button
							className="flex justify-start hover:text-green-400"
							onClick={() => scrollTo("home")}
						>
							{" "}
							{">"} me
						</button>
						<button
							className="flex justify-start hover:text-green-400"
							onClick={() => scrollTo("skills")}
						>
							{" "}
							{">"} skills
						</button>
						<button
							className="flex justify-start hover:text-green-400"
							onClick={() => scrollTo("projects")}
						>
							{" "}
							{">"} projects
						</button>
						<button
							className="flex justify-start hover:text-green-400"
							onClick={() => scrollTo("message")}
						>
							{" "}
							{">"} message me!
						</button>
					</div>
				</Terminal>

				<div className="flex flex-col gap-6 text-black dark:text-gray-300">
					<p className="leading-7">
						Strong interest in modern web development with{" "}
						<Tag tagName="Next.js" /> and data analysis with{" "}
						<Tag tagName="Python" />, specializing in the skills
						below.
					</p>
				</div>
			</div>
		</section>
	);
}
