import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { cn } from "~/lib/utils";

interface MessagesBubbleProps {
  id: string;
  content: string;
  user: {
    id: string;
    name: string;
    avatarUrl?: string;
  };
  timestamp?: string;
  isCurrentUser?: boolean;
  // 누가 보낸 메세지인지 구분해놓아야 메세지 방향(내가 보낸건 오른쪽, 상대방은 왼쪽) 을 정할 수 있어서 필요함.
}

export function MessagesBubble({
  id,
  content,
  user,
  timestamp,
  isCurrentUser = false,
}: MessagesBubbleProps) {
  return (
    <div
      className={cn(
        "flex items-end gap-4",
        isCurrentUser ? "flex-row-reverse" : ""
      )}
    >
      <Avatar>
        <AvatarImage src={user.avatarUrl} />
        <AvatarFallback>{user.name[0]}</AvatarFallback>
      </Avatar>
      <div
        className={cn({
          "bg-accent rounded-md p-4 text-sm w-1/3": true,
          "bg-accent rounded-br-none": isCurrentUser,
          "bg-primary text-primary-foreground rounded-bl-none": !isCurrentUser,
        })}
      >
        <p>{content}</p>
        {timestamp && (
          <p className="text-xs text-muted-foreground mt-2">{timestamp}</p>
        )}
      </div>
    </div>
  );
}
