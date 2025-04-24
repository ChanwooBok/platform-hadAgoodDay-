import { Link } from "react-router";
import { Button } from "~/common/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { DotIcon, EyeIcon, HeartIcon, LockIcon } from "lucide-react";
import { cn } from "~/lib/utils";

interface IdeaCardProps {
  id: string;
  title: string;
  viewCount: number;
  postedAt: string;
  likeCount: number;
  claimed: boolean;
}

export function IdeaCard({
  id,
  title,
  viewCount,
  postedAt,
  likeCount,
  claimed,
}: IdeaCardProps) {
  return (
    <Card>
      <CardHeader>
        <Link to={`/ideas/${id}`}>
          <CardTitle className="text-xl">
            <span
              className={cn(
                claimed
                  ? "bg-muted-foreground selection:bg-muted-foreground text-muted-foreground"
                  : ""
              )}
            >
              {title}
            </span>
          </CardTitle>
        </Link>
      </CardHeader>
      <CardContent className="flex items-center">
        <div className="flex gap-2">
          <EyeIcon className="w-4 h-4" />
          <span>{viewCount}</span>
        </div>
        <DotIcon className="w-4 h-4" />
        <span>{postedAt}</span>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline" className="gap-2">
          <HeartIcon className="w-4 h-4" />
          <span>{likeCount}</span>
        </Button>
        {!claimed ? (
          <Button asChild>
            <Link to={`/ideas/${id}/claim`}>claim the idea &rarr;</Link>
          </Button>
        ) : (
          <Button variant="outline" className="cursor-not-allowed">
            <LockIcon className="w-4 h-4" />
            Claimed
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
