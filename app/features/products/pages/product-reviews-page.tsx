import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "~/common/components/ui/button";
import { AvatarFallback } from "~/common/components/ui/avatar";
import { StarIcon } from "lucide-react";
import { ReviewCard } from "../components/review-card";
import { Dialog, DialogTrigger } from "~/common/components/ui/dialog";
import { CreateReviewDialog } from "~/common/components/create-review-dialog";

export function meta() {
  return [{ name: "description", content: "Product Reviews" }];
}

export default function ProductReviewsPage() {
  return (
    <Dialog>
      <div className="space-y-10 max-w-xl">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">10 Reviews</h2>
          <DialogTrigger asChild>
            <Button variant={"secondary"}>Write a review</Button>
          </DialogTrigger>
        </div>
        <div className="space-y-10">
          <ReviewCard
            username="John Doe"
            handle="@username"
            avatarUrl="https://github.com/facebook.png"
            rating={5}
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
            postedAt="10 days ago"
          />
        </div>
      </div>
      <CreateReviewDialog />
    </Dialog>
  );
}
