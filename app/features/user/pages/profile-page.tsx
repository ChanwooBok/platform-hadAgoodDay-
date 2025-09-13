import type { Route } from "./+types/profile-page";

export const meta: Route.MetaFunction = () => [
  { title: "User Profile" },
  { name: "description", content: "View user profile" },
];

export default function ProfilePage() {
  return <div>Headline</div>;
}
