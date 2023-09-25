"use client";
import { Message } from "@prisma/client";
import { useState } from "react";

import { GoChevronDown, GoChevronUp } from "react-icons/go";

interface MessagesProps {
	messages: Message[];
}

export default function Messages({ messages }: MessagesProps) {
	const [open, setOpen] = useState(false);

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
				<div className="grid grid-cols-1 sm:grid-cols-2 mt-8 gap-10 ">
					{messages.map((message) => {
						const date = new Date(message.createdAt);
						return (
							<div key={message.id} className="border-l-2 pl-2">
								<div className="font-mono text-xs dark:text-slate-600 text-slate-500 mb-2">
									<p>{message.name}</p>
									<p>{date.toLocaleDateString()}</p>
								</div>

								<p className="font-mono text-xs dark:text-slate-300 text-slate-800">
									{message.message}
								</p>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
}
