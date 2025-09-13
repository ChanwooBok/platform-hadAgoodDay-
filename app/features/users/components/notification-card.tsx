import { EyeIcon } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { Button } from "~/common/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { cn } from "~/lib/utils";

interface NotificationCardProps {
  id: string;
  type: "follow" | "like" | "comment" | "message";
  user: {
    id: string;
    username: string;
    avatarUrl?: string;
  };
  content: string;
  timestamp: string;
  onView?: () => void;
  seen?: boolean;
}

export function NotificationCard({
  id,
  type,
  user,
  content,
  timestamp,
  onView,
  seen,
}: NotificationCardProps) {
  return (
    <Card className={cn("min-w-[450px]", seen ? " " : "bg-yellow-500/60")}>
      <CardHeader>
        <Avatar>
          <AvatarImage src={user.avatarUrl} />
          <AvatarFallback>{user.username[0].toUpperCase()}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle>
            <span>{user.username}</span>
            <span> {content}</span>
          </CardTitle>
          <small className="text-muted-foreground text-sm">{timestamp}</small>
        </div>
      </CardHeader>
      <CardContent></CardContent>
      {onView && (
        <CardFooter className="justify-end">
          <Button variant="outline" size="icon" onClick={onView}>
            <EyeIcon className="w-4 h-4" />
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
