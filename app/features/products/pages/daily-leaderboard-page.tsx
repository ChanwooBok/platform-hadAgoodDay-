import { DateTime } from "luxon";
import type { Route } from "./+types/daily-leaderboard-page";
import { data, isRouteErrorResponse, Link } from "react-router";
import { date, z } from "zod";
import { Hero } from "~/common/components/hero";
import { ProductCard } from "../components/product-card";
import { Button } from "~/common/components/ui/button";
import ProductPagination from "~/common/components/product-pagination";

export const meta: Route.MetaFunction = ({ params }) => {
  const date = DateTime.fromObject({
    year: Number(params.year),
    month: Number(params.month),
    day: Number(params.day),
  });
  return [
    {
      title: `The best product of ${date.toLocaleString(DateTime.DATE_MED)}`,
    },
  ];
};

const paramsSchema = z.object({
  year: z.coerce.number(),
  month: z.coerce.number(),
  day: z.coerce.number(),
});

export const loader = ({ params }: Route.LoaderArgs) => {
  const { success, data: parsedData } = paramsSchema.safeParse(params);
  if (!success) {
    throw data(
      {
        error_code: "Invalid date",
        message: "The date is invalid",
      },
      { status: 400 }
    );
  }
  const date = DateTime.fromObject(parsedData).setZone("Asia/Seoul");
  if (!date.isValid) {
    throw data(
      {
        error_code: "Invalid date",
        message: "The date is invalid",
      },
      {
        status: 400,
      }
    );
  }
  const today = DateTime.now().setZone("Asia/Seoul").startOf("day");
  // 미래 날짜 정보는 볼 수 없으므로 검증
  if (date > today) {
    throw data(
      {
        error_code: "Future date",
        message: "The date is in the future",
      },
      { status: 400 }
    );
  }
  return {
    ...parsedData,
  }; // 위에서 데이터 검증이 끝났다면 정상적으로 반환
};

export default function DailyLeaderboardPage({
  loaderData,
}: Route.ComponentProps) {
  const urlDate = DateTime.fromObject({
    year: loaderData.year,
    month: loaderData.month,
    day: loaderData.day,
  });
  const previousDay = urlDate.minus({ days: 1 });
  const nextDay = urlDate.plus({ days: 1 });
  // luxon을 써야하는 이유
  const isToday = urlDate.equals(DateTime.now().startOf("day"));

  return (
    <div className="space-y-10">
      <Hero
        title={`The best product of ${urlDate.toLocaleString(
          DateTime.DATE_FULL
        )}`}
      />
      <div className="flex items-center justify-center gap-2">
        <Button variant="secondary" asChild>
          <Link
            to={`/products/leaderboards/daily/${previousDay.year}/${previousDay.month}/${previousDay.day}`}
          >
            &larr; {previousDay.toLocaleString(DateTime.DATE_SHORT)}
          </Link>
        </Button>
        {/* 오늘 날짜는 버튼 클릭 불가 */}
        {!isToday ? (
          <Button variant="secondary" asChild>
            <Link
              to={`/products/leaderboards/daily/${nextDay.year}/${nextDay.month}/${nextDay.day}`}
            >
              {nextDay.toLocaleString(DateTime.DATE_SHORT)} &rarr;
            </Link>
          </Button>
        ) : null}
      </div>

      <div className="space-y-5 w-full max-w-screen-md mx-auto">
        {Array.from({ length: 11 }).map((_, index) => (
          <ProductCard
            key={index}
            id={`productId-${index}`}
            title="Product Name"
            description="Product Description"
            commentCount={12}
            viewCount={12}
            upvoteCount={120}
          />
        ))}
      </div>
      <ProductPagination totalPages={10} />
    </div>
  );
}

// this ErrorBoundary is optional and customized. Without this, the ErrorBoundary in the root.ts will be shown.
export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        {error.data.error_code} / {error.data.message}
      </div>
    );
  }
  if (error instanceof Error) {
    return <div>{error.message}</div>;
  }
  return <div>Unknown error</div>;
}
