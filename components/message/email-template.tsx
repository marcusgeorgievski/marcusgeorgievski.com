import { Message } from "@/lib/types";

interface EmailTemplateProps {
	message: Message;
}

export default function EmailTemplate({ message }: EmailTemplateProps) {
	return (
		<div>
			<h1 className="text-xl font-semibold mb-3">{}</h1>
			{message.contact && (
				<h2 className="text-lg font-semibold mb-3">
					{message.contact}
				</h2>
			)}

			<p className="font-mono text-slate-700 text-sm">{message.body}</p>
		</div>
	);
}
