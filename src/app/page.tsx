import MsgButton from "@/components/core/msg-button";
import HomePageContent from "./page-content";
import MessageSection from "@/components/messages/message-section";

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ foo?: string; m?: string }>;
}) {
  const { foo, m } = await searchParams;
  const messagesKey = process.env.MESSAGES_KEY;
  const buttonText = process.env.BUTTON;
  const btnProps = {
    m: m || undefined,
    messagesKey: messagesKey || undefined,
    buttonText: buttonText || undefined,
  };

  return (
    <div className="space-y-16">
      {m === process.env.MESSAGES_KEY && (
        <div>
          <MsgButton {...btnProps} />
        </div>
      )}

      <HomePageContent />

      <MessageSection foo={foo} m={m} />
    </div>
  );
}
