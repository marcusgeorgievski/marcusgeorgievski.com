"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { jetBrainsMono } from "../../lib/fonts";
import { cn } from "../../lib/utils";

import { createMessage } from "@/actions/messages";
// import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { Button } from "../ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  Form,
} from "../ui/form";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { PiTextAlignLeftLight } from "react-icons/pi";
import { messageSchema } from "@/lib/message";
import { toast } from "sonner";

export default function MessageForm() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<z.infer<typeof messageSchema>>({
    resolver: zodResolver(messageSchema),
    defaultValues: {
      name: "",
      contact: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof messageSchema>) {
    startTransition(async () => {
      createMessage(values).then((res) => {
        if (res?.error) {
          toast.error("Error. Something went wrong :(");
          return;
        }
        toast("Message sent!", {
          description: res?.description || "Thanks " + values.name + "!",
        });
        form.resetField("message");
      });
      router.refresh();
    });
  }

  return (
    <div id="message">
      <h3
        className={cn(
          jetBrainsMono.className,
          "text-sm text-slate-400 mb-8 animate-fade-in  px-1  flex items-center gap-3 border-b pb-2 border-zinc-800"
        )}
      >
        <PiTextAlignLeftLight height={16} width={16} />
        message
      </h3>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="md:grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="name" {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Contact{" "}
                    <span className="text-xs text-muted-foreground/90 ml-2">
                      optional
                    </span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="email, phone, etc." {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="hello"
                    className="resize-none h-[80px]"
                    {...field}
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={isPending}
            aria-label="Submit message"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
