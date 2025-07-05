import React, { Suspense } from "react";
import Messages from "./messages";
import MessageForm from "./message-form";

export default function MessageSection({
  m,
  foo,
}: {
  m?: string;
  foo?: string;
}) {
  return (
    <>
      {(m !== undefined || foo !== undefined) && (
        <section className="flex flex-col gap-12">
          {/* Form */}
          {m === process.env.MESSAGES_KEY && <MessageForm />}

          {/* List */}
          {foo === process.env.MESSAGE_KEY && (
            <>
              <Suspense fallback={<div>Loading...</div>}>
                <Messages />
              </Suspense>
            </>
          )}
        </section>
      )}
    </>
  );
}
