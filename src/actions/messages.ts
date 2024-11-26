"use server";

import { z } from "zod";
import sql from "../lib/db";
import { Message, messageSchema } from "@/data/messages";

export async function getMessages() {
  try {
    const results: Message[] =
      await sql`SELECT * FROM "Message" ORDER BY "createdAt" ASC`;
    return results;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function deleteMessage(id: number) {
  const results = await sql`DELETE FROM "Message" WHERE id = ${id}`;
  return results;
}

export async function createMessage(values: z.infer<typeof messageSchema>) {
  const { name, contact, message } = values;

  try {
    await sql`INSERT INTO "Message" (name, contact, body) VALUES (${name}, ${contact}, ${message})`;

    if (name.toLocaleLowerCase() == "em") {
      return {
        title: process.env.TITLE,
        description: process.env.THANK,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      error: "Something went wrong!",
    };
  }
}
