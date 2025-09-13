import type { Route } from "./+types/message-page";
import { Hero } from "~/common/components/hero";
import { Button } from "~/common/components/ui/button";
import { Form } from "react-router";
import InputPair from "~/common/components/input-pair";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "~/common/components/ui/card";
import { Textarea } from "~/common/components/ui/textarea";
import { SendIcon } from "lucide-react";
import { MessagesBubble } from "../components/messages-bubble";
export const meta: Route.MetaFunction = () => [
  { title: "Message" },
  { name: "description", content: "View your message" },
];

export default function MessagePage() {
  return (
    <div className="h-full flex flex-col justify-between">
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <Avatar className="size-14">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-0">
            <CardTitle>John Doe</CardTitle>
            <CardDescription>Last seen 12 hours ago</CardDescription>
          </div>
        </CardHeader>
      </Card>
      <div className="py-10 overflow-y-scroll flex flex-col justify-start h-full">
        {Array.from({ length: 3 }).map((_, index) => (
          <MessagesBubble
            id={index.toString()}
            content="Hello, how are you? i have a question about the product so what i am going to do is"
            user={{
              id: "1",
              name: "John Doe",
              avatarUrl: "https://github.com/shadcn.png",
            }}
            timestamp="2:30 PM"
            isCurrentUser={index % 2 === 0}
          />
        ))}
      </div>
      <Card>
        <Form className="relative flex justify-end items-center">
          <Textarea
            className="resize-none"
            placeholder="Type your message here."
            rows={2}
          />
          <Button type="submit" size="icon" className="absolute right-2">
            <SendIcon className="size-4" />
          </Button>
        </Form>
      </Card>
    </div>
  );
}
