import type { Route } from "./+types/dashboard-ideas-page";
import { Hero } from "~/common/components/hero";
import { Button } from "~/common/components/ui/button";
import { Link } from "react-router";
import { IdeaCard } from "~/features/ideas/components/idea-card";

export const meta: Route.MetaFunction = () => [
  { title: "My Ideas" },
  { name: "description", content: "Manage your ideas" },
];

export default function DashboardIdeasPage() {
  return (
    <div className="space-y-10">
      <div>Claimed idea</div>

      <div>
        {Array.from({ length: 5 }).map((_, index) => (
          <IdeaCard
            key={index}
            id="ideasId"
            title="A startup that crates an AI-powered productivity tool,delivering custom AI prompts to users tracking their productivity and providing insights on their progress."
            viewCount={123}
            postedAt="12 hours ago"
            likeCount={12}
            claimed={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
}
