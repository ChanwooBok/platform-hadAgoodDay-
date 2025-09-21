import { data, Outlet } from "react-router";
import { z } from "zod";
import type { Route } from "./+types/leaderboard-layout";

// --->> This is a schema for the search params
const searchParamsSchema = z.object({
  page: z.coerce.number().min(1).optional().default(1),
});

// <-- Validate the search params in advance for every leaderboard page -->
export const loader = async ({ request }: Route.LoaderArgs) => {
  const url = new URL(request.url);
  const { success, data: parsedData } = searchParamsSchema.safeParse(
    // --->> Zod to validate the object against the schema defined above
    Object.fromEntries(url.searchParams)
  );
  if (!success) {
    throw data({
      error_code: "Invalid search params",
    });
  }
  return {
    page: parsedData.page,
  };
};

export default function LeaderboardLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
