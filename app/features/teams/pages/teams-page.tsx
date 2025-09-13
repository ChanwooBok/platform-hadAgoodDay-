import type { Route } from "./+types/teams-page";
import { Button } from "~/common/components/ui/button";
import { Link } from "react-router";
import { Hero } from "~/common/components/hero";
import { TeamCard } from "../components/team-card";

export const meta: Route.MetaFunction = () => [
  { title: "Teams" },
  { name: "description", content: "Browse and discover teams" },
];

export default function TeamsPage() {
  return (
    <div className="space-y-10">
      <Hero title="Teams" description="Find your team" />
      <div className="grid grid-cols-4  gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <TeamCard
            key={index}
            id={`team-${index}`}
            leaderUsername={`user-${index}`}
            leaderAvatarUrl={`https://github.com/user-${index}.png`}
            positions={["Developer", "Designer"]}
            project="Project ${index}"
          />
        ))}
      </div>
    </div>
  );
}
