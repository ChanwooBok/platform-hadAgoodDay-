import type { Route } from "./+types/notifications-page";
import { NotificationCard } from "../components/notification-card";

export const meta: Route.MetaFunction = () => [
  { title: "Notifications" },
  { name: "description", content: "View your notifications" },
];

export default function NotificationsPage() {
  return (
    <div className="space-y-20">
      <h1 className="text-4xl font-semibold">Notifications</h1>
      <div className="flex flex-col gap-4 items-start gap-5">
        <NotificationCard
          id="1"
          type="follow"
          user={{
            id: "1",
            username: "Steve Jobs",
            avatarUrl: "https://github.com/steve-jobs.png",
          }}
          content="followed you"
          timestamp="5 minutes ago"
          onView={() => {
            // Handle view notification
          }}
        />
      </div>
    </div>
  );
}
