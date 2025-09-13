import type { Route } from "./+types/profile-page";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";
import { Link } from "react-router";

export const meta: Route.MetaFunction = () => [
  { title: "User Profile" },
  { name: "description", content: "View user profile" },
];

export default function ProfilePage() {
  return (
    <div className="max-w-screen-md flex flex-col space-y-10">
      <div>
        <h4 className="text-lg font-semibold">Headline</h4>
        <p className="text-sm text-muted-foreground">
          I am a product designer based in San Francisco
        </p>
      </div>

      <div>
        <h4 className="text-lg font-semibold">About</h4>
        <p className="text-sm text-muted-foreground">
          I am a product designer based in San Francisco
        </p>
      </div>
    </div>
  );
}
