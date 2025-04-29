import { DateTime } from "luxon";
import type { Route } from "./+types/yearly-leaderboard-page";
import { data, isRouteErrorResponse, Link } from "react-router";
import { date, z } from "zod";
import { Hero } from "~/common/components/hero";
import { ProductCard } from "../components/product-card";
import { Button } from "~/common/components/ui/button";
import ProductPagination from "~/common/components/product-pagination";

export const meta: Route.MetaFunction = ({ params }) => {
  const date = DateTime.fromObject({
    year: Number(params.year),
  });
  return [{ title: `best of ${date.toLocaleString({ year: "numeric" })}` }];
};

// zod -> It's a type-safe way to handle URL parameters, ensuring they're the correct type before using them in your application.
const paramsSchema = z.object({
  year: z.coerce.number(),
});
// Using zod, we can validate the params. Basically we write down in the object what we expect.
// and then we can use the paramsSchema to validate the params.

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
  // the whole reason why we use luxon is to validate the date like using isValid
  // because it is so complicated to validate the date in javascript
  const date = DateTime.fromObject({
    year: parsedData.year,
    month: parsedData.month,
  }).setZone("Asia/Seoul");
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
  const today = DateTime.now().setZone("Asia/Seoul").startOf("month");
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
  }; // 위에서 luxon을 이용해서 데이터 검증이 끝났다면 정상적으로 반환
};

export default function WeeklyLeaderboardPage({
  loaderData,
}: Route.ComponentProps) {
  const urlDate = DateTime.fromObject({
    year: loaderData.year,
  });
  const previousYear = urlDate.minus({ years: 1 });
  const nextYear = urlDate.plus({ years: 1 });
  // luxon을 써야하는 이유 -> 날짜 비교를 쉽게 해주기 때문
  const isToday = urlDate.equals(DateTime.now().startOf("year"));

  return (
    <div className="space-y-10">
      <Hero
        title={`best of ${urlDate.toLocaleString({
          year: "numeric",
        })}`}
        description="The best product of the year"
      />
      <div className="flex items-center justify-center gap-2">
        <Button variant="secondary" asChild>
          <Link to={`/products/leaderboards/yearly/${previousYear.year}`}>
            &larr;{" "}
            {previousYear.toLocaleString({
              year: "numeric",
            })}
          </Link>
        </Button>
        {/* 오늘 날짜는 버튼 클릭 불가 */}
        {!isToday ? (
          <Button variant="secondary" asChild>
            <Link to={`/products/leaderboards/yearly/${nextYear.year}`}>
              {nextYear.toLocaleString({
                year: "numeric",
              })}
              &rarr;
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
