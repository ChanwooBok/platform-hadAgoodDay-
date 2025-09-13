import { Form } from "react-router";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import InputPair from "./input-pair";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { StarIcon } from "lucide-react";
import { useState } from "react";
export function CreateReviewDialog() {
  const [rating, setRating] = useState<number>(0);
  const [hoveredStar, setHoveredStar] = useState<number>(0);

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>what do you think about this product?</DialogTitle>
        <DialogDescription>
          Share your thoughts with other users and help them make a decision.
        </DialogDescription>
      </DialogHeader>
      <Form className="space-y-10">
        <div>
          <Label className="flex flex-col gap-1">
            Rating{" "}
            <small className="text-muted-foreground">
              What would you rate this product?
            </small>
          </Label>
          <div className="flex gap-2 mt-5">
            {[1, 2, 3, 4, 5].map((star) => (
              <label
                key={star}
                className="relative"
                onMouseEnter={() => setHoveredStar(star)}
                onMouseLeave={() => setHoveredStar(0)}
              >
                <StarIcon
                  className="w-4 h-4"
                  fill={
                    hoveredStar >= star || rating >= star
                      ? "currentColor"
                      : "none"
                  }
                />
                <input
                  type="radio"
                  name="rating"
                  value="star"
                  required
                  className="opacity-0 h-px w-px absolute"
                  onChange={() => setRating(star)}
                />
              </label>
            ))}
          </div>
        </div>

        <InputPair
          textArea
          required
          name="review"
          label="Review"
          description="Maximum 500 characters"
          placeholder="Write your review here..."
        />
        <DialogFooter>
          <Button type="submit">Save Review</Button>
        </DialogFooter>
      </Form>
    </DialogContent>
  );
}
