"use client";
import { useState } from "react";

import { useToast } from "@/components/shadcn/ui/use-toast";
import { ToastAction } from "@/components/shadcn/ui/toast";

interface MessageFormProps {
	//children: React.ReactNode;
}

export default function MessageForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const { toast } = useToast();

	async function handleSubmit(e: any) {
		e.preventDefault();
		handleToast();

		// API call
		const res = await fetch("/api/message", {
			body: JSON.stringify({
				name,
				email,
				message,
			}),
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
		}).then((res) => {
			if (res.status !== 200) {
				toast({
					title: "Message failed to send, try again later!",
					variant: "destructive",
					description: "Something went wrong :(",
					action: <ToastAction altText="nope">{":("}</ToastAction>,
				});
			} else {
				handleToast();
			}
		});

		// Clean up
		setMessage("");
	}

	function handleToast() {
		const date = new Date();
		var options: any = {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric",
		};
		toast({
			title: "Message sent, thanks!",
			description: date.toLocaleDateString("en-US", options),
			action: <ToastAction altText="yep">{":)"}</ToastAction>,
		});
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="grid grid-cols-1 gap-3 mb-4 sm:gap-5 sm:grid-cols-2">
				<div className="flex flex-col gap-1">
					<label className="font-mono text-xs">Name</label>
					<input
						type="text"
						placeholder="Name"
						id="name"
						maxLength={40}
						className="p-2 rounded-md bg-slate-800 text-slate-200"
						value={name}
						onChange={(e) => setName(e.target.value)}
						// required
					/>
				</div>
				<div className="flex flex-col gap-1">
					<label className="font-mono text-xs">Email</label>
					<input
						type="email"
						id="email"
						maxLength={40}
						placeholder="Email"
						className="p-2 rounded-md bg-slate-800 text-slate-200"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						// required
					/>
				</div>
			</div>

			<div className="flex flex-col gap-1">
				<label className="font-mono text-xs">Message</label>
				<textarea
					id="message"
					className="w-full h-24 p-2 rounded-md resize-none bg-slate-800 text-slate-200"
					placeholder="Write your message here..."
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					// required
				></textarea>
			</div>

			<button
				type="submit"
				className="px-2 py-1 font-semibold text-black bg-green-400 rounded-md hover:scale-[1.06] transition-all mt-2"
			>
				Send
			</button>
		</form>
	);
}
