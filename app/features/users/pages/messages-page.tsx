import type { Route } from "./+types/messages-page";
import { MessageCircleIcon } from "lucide-react";
export const meta: Route.MetaFunction = () => [
  { title: "Messages" },
  { name: "description", content: "View your messages" },
];

export default function MessagesPage() {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-4">
      <MessageCircleIcon className="size-12 text-muted-foreground" />
      <h1 className="text-xl text-muted-foreground font-semibold">
        No messages yet
      </h1>
    </div>
  );
}
