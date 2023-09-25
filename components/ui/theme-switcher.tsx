"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BiSun } from "react-icons/bi";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";

export default function ThemeSwitcher() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<button
			className="p-1 border border-blue-700 rounded-md"
			onClick={(e) =>
				theme === "dark" ? setTheme("light") : setTheme("dark")
			}
		>
			{theme === "dark" ? (
				<WiMoonAltWaningCrescent4 className="text-blue-600" />
			) : (
				<BiSun />
			)}
		</button>
	);
}
