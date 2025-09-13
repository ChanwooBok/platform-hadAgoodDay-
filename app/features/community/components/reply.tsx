import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { Button } from "~/common/components/ui/button";
import { Form, Link } from "react-router";
import { DotIcon, MessageCircleIcon } from "lucide-react";
import { useState } from "react";
import { Textarea } from "~/common/components/ui/textarea";
interface ReplyProps {
  id: string;
  content: string;
  author: {
    id: string;
    username: string;
    avatarUrl?: string;
  };
  createdAt: string;
  onReply?: () => void;
  topLevel?: boolean;
}

export function Reply({
  id,
  content,
  author,
  createdAt,
  onReply,
  topLevel = false,
}: ReplyProps) {
  const [replying, setReplying] = useState(false);
  const toggleReply = () => setReplying((prev) => !prev);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col items-start gap-5">
        <Avatar className="size-14">
          <AvatarFallback>{author.username[0].toUpperCase()}</AvatarFallback>
          <AvatarImage src={author.avatarUrl} />
        </Avatar>
        <div className="flex flex-col gap-4 items-start">
          <div className="flex items-center gap-2">
            <Link to={`/user/@${author.username}`}>
              <h4 className="font-bold">{author.username}</h4>
            </Link>
            <DotIcon className="size-5" />
            <span className="text-sm text-muted-foreground">{createdAt}</span>
          </div>
          <p>{content}</p>
          {onReply && (
            <Button variant="ghost" className="self-end" onClick={toggleReply}>
              <MessageCircleIcon className="size-4" />
              Reply
            </Button>
          )}
          {replying && (
            <Form className="flex items-start gap-5 w-3/4">
              <Avatar className="size-14">
                <AvatarFallback>N</AvatarFallback>
                <AvatarImage src="https://github.com/chanwoobok.png" />
              </Avatar>
              <div className="flex flex-col gap-5 items-end w-full">
                <Textarea
                  placeholder="Write a reply"
                  className="w-full resize-none"
                  rows={5}
                />
                <Button>Reply</Button>
              </div>
            </Form>
          )}
        </div>
      </div>

      {topLevel && (
        <div className="pl-10 w-full">
          <Reply
            id="1"
            content="I'm using todolist, it is okay, but I dream of a tool that can help me manage my tasks and projects. Any recommendations?"
            author={{
              id: "1",
              username: "woo",
              avatarUrl: "https://github.com/chanwoobok.png",
            }}
            createdAt="12 hours ago"
            onReply={() => {}}
          />
        </div>
      )}
    </div>
  );
}
