"use client";
import { Typewriter } from "react-simple-typewriter";

const props = {
	words: ["Web Development", "Software Development", "Data Science"],
	typeSpeed: 30,
	deleteSpeed: 10,
	loop: true,
	delaySpeed: 4000,
};

export default function Typer() {
	return (
		<span className="font-bold">
			<span className="opacity-0">d</span>
			<Typewriter {...props} />
		</span>
	);
}
