"use client";
import { useState } from "react";

export default function Terminal({
	children,
	className,
}: {
	children: React.ReactNode;
	className: string;
}) {
	// Control interactive terminal window
	type windowStates = "open" | "minimized" | "closed";
	const [state, setState] = useState<windowStates>("open");

	return (
		<div
			className={`${state === "closed" ? "hidden" : ""}
      font-mono border border-slate-800 overflow-hidden rounded-lg  bg-zinc-900 dark:bg-zinc-950
     mx-auto terminal ${className}`}
		>
			{/* Top Bar */}
			<div
				className={`
        ${state === "minimized" ? "px-9" : ""}
        ${
			state === "closed" ? "hidden" : ""
		} flex items-center pl-3 py-[6px] overflow-hidden bg-zinc-800/90 dark:bg-zinc-900 `}
			>
				{/* Buttons */}
				<div className="flex items-center gap-1">
					<button
						onClick={() => setState("closed")}
						className="w-[14px] h-[14px] border border-slate-900 rounded-full cursor-pointer bg-red-600 hover:bg-red-500"
					/>
					<button
						onClick={() => setState("minimized")}
						className="w-[14px] h-[14px] border border-slate-900 rounded-full cursor-pointer bg-yellow-500 hover:bg-yellow-300"
					/>
					<button
						onClick={() => setState("open")}
						className="w-[14px] h-[14px] border border-slate-900 rounded-full cursor-pointer bg-green-500/90 hover:bg-green-400"
					/>
				</div>

				{/* Title */}
				<p className="dark:text-zinc-400 text-zinc-400 text-xs pl-[5%] whitespace-nowrap">
					📁 https://www.marcusgeorgievski.com
				</p>
			</div>

			{/* Inner Content */}
			<div
				className={`${
					state === "minimized" ? "hidden" : ""
				} py-2 px-2 text-xs`}
			>
				{children}
			</div>
		</div>
	);
}
