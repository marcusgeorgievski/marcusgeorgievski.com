"use client";
import Link from "next/link";
import ThemeSwitcher from "./theme-switcher";
import { GiCapybara } from "react-icons/gi";

export default function Header() {
	function scrollTo(section: string) {
		const element = document.getElementById(section);

		if (section == "home") {
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
			return;
		}

		if (element) {
			const offset = -60; // Adjust the offset as needed

			const elementPosition =
				element.getBoundingClientRect().top + window.scrollY;
			const targetScrollPosition = elementPosition + offset;

			window.scrollTo({
				top: targetScrollPosition,
				behavior: "smooth",
			});
		}
	}
	return (
		<header className="border-b border-blue-300 bg-blue-50/90 dark:border-blue-900/80 dark:bg-[#020626]/90 backdrop-blur-sm fixed top-0 right-0 left-0 z-40">
			<div className="max-w-[1000px] flex flex-col  gap-2 sm:flex-row justify-between mx-auto px-6 sm:px-4 py-2 sm:py-3">
				<button
					onClick={() =>
						window.scrollTo({ top: 0, behavior: "smooth" })
					}
				>
					<h1 className="font-semibold text-xl flex gap-2 items-center">
						<GiCapybara className="text-indigo-600" />
						Marcus Georgievski
					</h1>
				</button>

				<div className="flex items-center justify-between gap-4 ">
					<nav className="flex items-center gap-4 ">
						<button
							onClick={() => scrollTo("home")}
							className="flex items-center gap-4 font-medium text-sm text-blue-700 transition-all hover:underline underline-offset-2"
						>
							Home
						</button>
						<button
							onClick={() => scrollTo("skills")}
							className="flex items-center gap-4 font-medium text-sm text-blue-700 transition-all hover:underline underline-offset-2"
						>
							Skills
						</button>
						<button
							onClick={() => scrollTo("projects")}
							className="flex items-center gap-4 font-medium text-sm text-blue-700 transition-all hover:underline underline-offset-2"
						>
							Projects
						</button>
					</nav>
					<ThemeSwitcher />
				</div>
			</div>
		</header>
	);
}
