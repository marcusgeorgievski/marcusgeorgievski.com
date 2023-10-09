import { Resend } from "resend";
import EmailTemplate from "@/components/message/email-template";
import { Message } from "../types";

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendEmail(message: Message) {
	try {
		const emailData = await resend.emails.send({
			from: "Marcus Georgievski <marcusgeorgievski@outlook.com>",
			to: ["marcusgeorgievski@outlook.com"],
			subject: "Hello world",
			react: EmailTemplate({ message }),
		});

		return emailData;
	} catch (error) {
		throw new Error("Error sending email");
	}
}

export default sendEmail;
