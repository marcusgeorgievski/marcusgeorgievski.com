import { z } from "zod";

export const messageSchema = z.object({
  name: z.string().min(1, {
    message: "Name required",
  }),
  contact: z.string(),
  message: z.string().min(1, {
    message: "Message required",
  }),
});

export interface Message {
  id: number;
  name: string;
  contact: string;
  body: string;
  createdAt: string;
}
