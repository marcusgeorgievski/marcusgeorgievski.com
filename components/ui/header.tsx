"use client";
import Link from "next/link";
import ThemeSwitcher from "./theme-switcher";
import { GiCapybara } from "react-icons/gi";
import { scrollTo } from "@/lib/utils/misc";

export default function Header() {
	return (
		<header className="border-b border-blue-300 bg-blue-50/90 dark:border-blue-900/80 dark:bg-[#020626]/90 backdrop-blur-sm fixed top-0 right-0 left-0 z-40">
			<div className="max-w-[1000px] flex flex-col  gap-2 sm:flex-row justify-between mx-auto px-6 sm:px-4 py-2 sm:py-3">
				<button
					onClick={() =>
						window.scrollTo({ top: 0, behavior: "smooth" })
					}
				>
					<h1 className="flex items-center gap-2 text-xl font-semibold">
						<GiCapybara className="text-indigo-600" />
						Marcus Georgievski
					</h1>
				</button>

				<div className="flex items-center justify-between gap-4 ">
					<nav className="flex items-center gap-4 ">
						<button
							onClick={() => scrollTo("home")}
							className="flex items-center gap-4 text-sm font-medium text-blue-700 transition-all hover:underline underline-offset-2"
						>
							Home
						</button>
						<button
							onClick={() => scrollTo("skills")}
							className="flex items-center gap-4 text-sm font-medium text-blue-700 transition-all hover:underline underline-offset-2"
						>
							Skills
						</button>
						<button
							onClick={() => scrollTo("projects")}
							className="flex items-center gap-4 text-sm font-medium text-blue-700 transition-all hover:underline underline-offset-2"
						>
							Projects
						</button>
						<button
							onClick={() => scrollTo("message")}
							className="flex items-center gap-4 text-sm font-medium text-blue-700 transition-all hover:underline underline-offset-2"
						>
							Message
						</button>
					</nav>
					<ThemeSwitcher />
				</div>
			</div>
		</header>
	);
}
