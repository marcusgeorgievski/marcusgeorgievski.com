import EmailTemplate from "@/components/message/email-template";
import { Message } from "../types";

export default async function sendEmail(message: Message) {
	const template = (message: Message) => `
<div>
			<h1 className="text-xl font-semibold mb">${message.name}</h1>


			<p className="font-mono text-slate-700 text-sm">${message.body}</p>

            ${
				message.contact &&
				`<p className="">
					<span className="text-slate-500">Contact: </span>${message.contact}
				</p>`
			}
		</div>`;

	try {
		let nodemailer = require("nodemailer");
		const transporter = nodemailer.createTransport({
			host: "smtp-mail.outlook.com", // hostname
			secure: false, // TLS requires secure connection to be false
			port: 587, // port for secure SMTP
			service: "hotmail",
			auth: {
				user: process.env.EMAIL,
				pass: process.env.EMAIL_PASSWORD,
			},
			tls: {
				rejectUnauthorized: false,
			},
		});

		const mailData = {
			from: process.env.EMAIL,
			to: process.env.EMAIL,
			subject: `Message From ${message.name}`,
			text: message.body,
			html: template(message),
		};

		await new Promise((resolve, reject) => {
			transporter.sendMail(mailData, (err: any, info: any) => {
				if (err) {
					console.error(err);
					reject(err);
				} else {
					resolve(info);
				}
			});
		});
	} catch (error) {
		throw new Error("Error sending email");
	}
}
