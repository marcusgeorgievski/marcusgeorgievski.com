"use client";
import { Message } from "@prisma/client";
import { useState } from "react";

import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { BsFillTrash3Fill, BsGridFill, BsList } from "react-icons/bs";
import { useRouter } from "next/navigation";

interface MessagesProps {
	messages: Message[];
}

export default function Messages({ messages }: MessagesProps) {
	const [open, setOpen] = useState(false);
	const [grid, setGrid] = useState(true);
	const router = useRouter();

	async function deleteMessage(id: number) {
		// API call
		const res = await fetch("/api/message", {
			body: JSON.stringify({
				id,
			}),
			headers: {
				"Content-Type": "application/json",
			},
			method: "DELETE",
		});
		router.refresh();
	}

	return (
		<div>
			<button
				onClick={() => setOpen(!open)}
				className="font-mono text-slate-600 text-xs hover:text-slate-300 flex items-center gap-2"
			>
				{open ? <GoChevronUp /> : <GoChevronDown />} messages (
				{messages.length}){" "}
			</button>

			{open && (
				<>
					<div className="flex gap-2 mt-2">
						<button onClick={() => setGrid(true)} className="p-1">
							<BsGridFill
								className={`${
									grid ? "text-slate-300" : "text-slate-600"
								} text-xs`}
							/>
						</button>
						<button onClick={() => setGrid(false)} className="p-1">
							<BsList
								className={`${
									grid ? "text-slate-600" : "text-slate-200"
								} text-sm`}
							/>
						</button>
					</div>
					<div
						className={`grid grid-cols-1 ${
							grid && "sm:grid-cols-2"
						} mt-8 gap-10`}
					>
						{messages.map((message) => {
							const date = new Date(message.createdAt);
							return (
								<div
									key={message.id}
									className="relative border-l-2 pl-2"
								>
									<div className="font-mono text-xs dark:text-slate-600 text-slate-500 mb-2">
										<p>{message.name}</p>
										<p>
											{date.toLocaleDateString()}{" "}
											{date.getHours()}:
											{date
												.getMinutes()
												.toString()
												.padStart(2, "0")}
										</p>
										<p className="font-mono text-xs dark:text-slate-600 text-slate-500">
											{message.contact}
										</p>
									</div>

									<p className="font-mono text-xs dark:text-slate-300 text-slate-800">
										{message.message}
									</p>

									<button
										onClick={() =>
											deleteMessage(message.id)
										}
									>
										<BsFillTrash3Fill className="text-red-800 text-xs top-2 right-2 absolute opacity-60" />
									</button>
								</div>
							);
						})}
					</div>
				</>
			)}
		</div>
	);
}
