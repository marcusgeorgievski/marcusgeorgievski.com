import { NextResponse } from "next/server";
import { Resend } from "resend";
import EmailTemplate from "@/components/message/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
	try {
		const data = await req.json();

		const emailData = await resend.emails.send({
			from: "Marcus Georgievski <marcusgeorgievski@outlook.com>",
			to: ["marcusgeorgievski@outlook.com"],
			subject: "Hello world",
			react: EmailTemplate(data.message),
		});

		// console.log("EMAIL: ", emailData);

		return NextResponse.json(emailData, { status: 200 });
	} catch (error) {
		return NextResponse.json({ error });
	}
}
