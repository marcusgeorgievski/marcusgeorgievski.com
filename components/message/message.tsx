import MessageForm from "./message-form";
import Messages from "./messages";
import { prisma } from "@/lib/prisma";

interface MessageProps {
	view: string;
}

export default async function Message({ view }: MessageProps) {
	const messages = await prisma.message.findMany({
		orderBy: {
			createdAt: "desc",
		},
	});

	return (
		<section id="message">
			<div className="mb-6">
				<h3 className="pb-2 mb-3 text-4xl font-bold border-b border-slate-400 dark:border-slate-700">
					Message
					<p className="mt-1 font-mono text-xs font-thin text-blue-600 dark:text-green-400">
						Leave a message!
					</p>
				</h3>
			</div>

			<div className="mb-4">
				<MessageForm />
			</div>

			{view && <Messages messages={messages} />}
		</section>
	);
}
