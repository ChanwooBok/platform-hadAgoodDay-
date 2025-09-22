import { DateTime } from "luxon";
import type { Route } from "./+types/monthly-leaderboard-page";
import { data, isRouteErrorResponse, Link } from "react-router";
import { date, z } from "zod";
import { Hero } from "~/common/components/hero";
import { ProductCard } from "../components/product-card";
import { Button } from "~/common/components/ui/button";
import ProductPagination from "~/common/components/product-pagination";
import { PAGE_SIZE } from "../constants";
import { getProductPagesByDateRange, getProductsByDateRange } from "../queries";

// Cool thing about meta function is that it can bring the params from the url
export const meta: Route.MetaFunction = ({ params }) => {
  const date = DateTime.fromObject({
    year: Number(params.year),
    month: Number(params.month),
  });
  return [
    {
      title: `best of ${date.toLocaleString({
        month: "long",
        year: "2-digit",
      })}`,
    },
  ];
};

// zod -> It's a type-safe way to handle URL parameters, ensuring they're the correct type before using them in your application.
const paramsSchema = z.object({
  year: z.coerce.number(),
  month: z.coerce.number(),
});
// Using zod, we can validate the params. Basically we write down in the object what we expect.
// and then we can use the paramsSchema to validate the params.

export const loader = async ({ params, request }: Route.LoaderArgs) => {
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
  const url = new URL(request.url);
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
  const products = await getProductsByDateRange({
    startDate: date.startOf("month").toUTC(),
    endDate: date.endOf("month").toUTC(),
    limit: PAGE_SIZE,
    page: Number(url.searchParams.get("page") ?? 1),
  });
  const totalPages = await getProductPagesByDateRange({
    startDate: date.startOf("month").toUTC(),
    endDate: date.endOf("month").toUTC(),
  });
  return {
    ...parsedData,
    products,
    totalPages,
  };
};

export default function WeeklyLeaderboardPage({
  loaderData,
}: Route.ComponentProps) {
  const urlDate = DateTime.fromObject({
    year: loaderData.year,
    month: loaderData.month,
  });
  const previousMonth = urlDate.minus({ months: 1 });
  const nextMonth = urlDate.plus({ months: 1 });
  // luxon을 써야하는 이유 -> 날짜 비교를 쉽게 해주기 때문
  const isToday = urlDate.equals(DateTime.now().startOf("month"));

  return (
    <div className="space-y-10">
      <Hero
        title={`best of ${urlDate.toLocaleString({
          month: "long",
          year: "2-digit",
        })}`}
        description="The best product of the month"
      />
      <div className="flex items-center justify-center gap-2">
        <Button variant="secondary" asChild>
          <Link
            to={`/products/leaderboards/monthly/${previousMonth.year}/${previousMonth.month}`}
          >
            &larr;{" "}
            {previousMonth.toLocaleString({
              month: "long",
              year: "2-digit",
            })}
          </Link>
        </Button>
        {/* 오늘 날짜는 버튼 클릭 불가 */}
        {!isToday ? (
          <Button variant="secondary" asChild>
            <Link
              to={`/products/leaderboards/monthly/${nextMonth.year}/${nextMonth.month}`}
            >
              {nextMonth.toLocaleString({
                month: "long",
                year: "2-digit",
              })}
              &rarr;
            </Link>
          </Button>
        ) : null}
      </div>

      <div className="space-y-5 w-full max-w-screen-md mx-auto">
        {loaderData.products.map((product) => (
          <ProductCard
            key={product.product_id}
            id={product.product_id}
            name={product.name}
            description={product.tagline}
            reviewsCount={product.reviews}
            viewCount={product.views.toString()}
            votesCount={product.upvotes.toString()}
          />
        ))}
      </div>
      <ProductPagination totalPages={loaderData.totalPages} />
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
