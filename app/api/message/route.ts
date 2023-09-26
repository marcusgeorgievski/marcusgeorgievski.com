import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

interface Message {
	name: string;
	contact?: string;
	message: string;
}

export async function POST(req: Request) {
	try {
		// Get body
		const data: Message = await req.json();

		// Create message
		const newMessage = await prisma.message.create({
			data: {
				name: data.name,
				contact: data.contact,
				message: data.message,
			},
		});

		return NextResponse.json({ data: newMessage }, { status: 200 });
	} catch (error) {
		console.error("Error creating message:", error);

		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 }
		);
	}
}

export async function DELETE(req: Request) {
	try {
		// Get body
		const data: { id: any } = await req.json();

		// Create message
		const deletedMessage = await prisma.message.delete({
			where: { id: data.id },
		});

		return NextResponse.json({ data: deletedMessage }, { status: 200 });
	} catch (error) {
		console.error("Error deleting message:", error);

		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 }
		);
	}
}
