import type { Route } from "./+types/profile-page";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";
import { Link, useOutletContext } from "react-router";
import client from "~/supa-client";

const loader = async ({ params }: Route.LoaderArgs) => {
  await client.rpc("track_event", {
    event_type: "profile_view",
    event_data: {
      username: params.username,
    },
  });
  return {};
};

export const meta: Route.MetaFunction = () => [
  { title: "User Profile" },
  { name: "description", content: "View user profile" },
];

export default function ProfilePage() {
  const { headline, bio } = useOutletContext<{
    headline: string;
    bio: string;
  }>();
  return (
    <div className="max-w-screen-md flex flex-col space-y-10">
      <div>
        <h4 className="text-lg font-semibold">Headline</h4>
        <p className="text-sm text-muted-foreground">{headline}</p>
      </div>

      <div>
        <h4 className="text-lg font-semibold">Bio</h4>
        <p className="text-sm text-muted-foreground">{bio}</p>
      </div>
    </div>
  );
}
