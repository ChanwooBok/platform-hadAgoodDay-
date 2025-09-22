import type { Route } from "./+types/teams-page";
import { Button } from "~/common/components/ui/button";
import { Link } from "react-router";
import { Hero } from "~/common/components/hero";
import { TeamCard } from "../components/team-card";
import { getTeams } from "../queries";
import { DateTime } from "luxon";

export const loader = async () => {
  const teams = await getTeams({ limit: 11 });
  return { teams };
};

export const meta: Route.MetaFunction = () => [
  { title: "Teams" },
  { name: "description", content: "Browse and discover teams" },
];

export default function TeamsPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="space-y-10">
      <Hero title="Teams" description="Find your team" />
      <div className="grid grid-cols-4  gap-4">
        {loaderData.teams.map((team) => (
          <TeamCard
            key={team.team_id}
            id={team.team_id}
            leaderUsername={team.team_leader.username}
            leaderAvatarUrl={team.team_leader.avatar}
            positions={["Developer", "Designer"]}
            project={team.product_description}
          />
        ))}
      </div>
    </div>
  );
}
