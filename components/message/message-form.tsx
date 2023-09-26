"use client";
import { useState } from "react";

import { useToast } from "@/components/shadcn/ui/use-toast";
import { ToastAction } from "@/components/shadcn/ui/toast";
import { useRouter } from "next/navigation";

interface MessageFormProps {
	//children: React.ReactNode;
}

export default function MessageForm() {
	const [name, setName] = useState("");
	const [contact, setContact] = useState("");
	const [message, setMessage] = useState("");
	const [disabled, setDisabled] = useState(false);

	const { toast } = useToast();
	const router = useRouter();

	// Validate non-empty name and message
	function validate(): boolean {
		if (name.trim() === "" || message.trim() === "") return false;
		return true;
	}

	async function handleSubmit(e: any) {
		e.preventDefault();

		// Validate non-empty name and message
		if (!validate()) {
			toast({
				title: "Sorry!",
				variant: "destructive",
				description: "Name and message cannot be empty!",
			});
			return;
		}

		// API call
		const res = await fetch("/api/message", {
			body: JSON.stringify({
				name,
				contact,
				message,
			}),
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
		}).then((res) => {
			// Failure toast
			if (res.status !== 200) {
				toast({
					title: "Message failed to send, try again later!",
					variant: "destructive",
					description: "Something went wrong :(",
					action: <ToastAction altText="nope">{":("}</ToastAction>,
				});
			} else {
				// success toast
				toast({
					title: `Message Sent!`,
					description: `Thanks ${name}!`,
					action: <ToastAction altText="yep">{":)"}</ToastAction>,
				});

				setDisabled(true);
				router.refresh();

				setTimeout(() => {
					setDisabled(false);
				}, 6000);
			}

			return res;
		});

		const responseBody = await res.json();

		// Clean up
		setMessage("");
	}

	return (
		<form onSubmit={handleSubmit} className="flex flex-col">
			<div className="grid grid-cols-1 gap-3 mb-4 sm:gap-5 sm:grid-cols-2">
				<div className="flex flex-col gap-1">
					<label className="font-mono text-xs">Name</label>
					<input
						type="text"
						placeholder="Name"
						id="name"
						maxLength={40}
						className="p-2 rounded-md bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 outline-blue-800"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className="flex flex-col gap-1">
					<label className="font-mono text-xs">
						Contact{" "}
						<span className="text-slate-400 dark:text-slate-600">
							(optional)
						</span>
					</label>
					<input
						type="contact"
						id="contact"
						maxLength={40}
						placeholder="Email/Phone"
						className="p-2 rounded-md bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 outline-blue-800"
						value={contact}
						onChange={(e) => setContact(e.target.value)}
					/>
				</div>
			</div>

			<div className="flex flex-col gap-1">
				<label className="font-mono text-xs">Message</label>
				<textarea
					id="message"
					className="w-full h-24 p-2 rounded-md resize-none bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 outline-blue-800"
					placeholder="Write your message here..."
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				></textarea>
			</div>

			<div>
				<button
					type="submit"
					disabled={disabled}
					className={`px-2 py-1 font-semibold text-black bg-green-400 rounded-md hover:scale-[1.06] transition-all mt-4 float-right   ${
						disabled && "opacity-50"
					}`}
				>
					Send
				</button>
			</div>
		</form>
	);
}
