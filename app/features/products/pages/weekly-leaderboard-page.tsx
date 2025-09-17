import { DateTime } from "luxon";
import type { Route } from "./+types/weekly-leaderboard-page";
import { data, isRouteErrorResponse, Link } from "react-router";
import { date, z } from "zod";
import { Hero } from "~/common/components/hero";
import { ProductCard } from "../components/product-card";
import { Button } from "~/common/components/ui/button";
import ProductPagination from "~/common/components/product-pagination";
import { getProductPagesByDateRange, getProductsByDateRange } from "../queries";
import { PAGE_SIZE } from "../constants";

export const meta: Route.MetaFunction = ({ params }) => {
  const date = DateTime.fromObject({
    weekYear: Number(params.year),
    weekNumber: Number(params.week),
  });
  return [
    { title: `best of week ${date.toLocaleString(DateTime.DATE_SHORT)}` },
  ];
};

const paramsSchema = z.object({
  year: z.coerce.number(),
  week: z.coerce.number(),
});

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
  const date = DateTime.fromObject({
    weekYear: parsedData.year,
    weekNumber: parsedData.week,
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
  const today = DateTime.now().setZone("Asia/Seoul").startOf("week");
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

  const url = new URL(request.url);

  const products = await getProductsByDateRange({
    startDate: DateTime.now().startOf("week"),
    endDate: DateTime.now().endOf("week"),
    limit: PAGE_SIZE,
    page: Number(url.searchParams.get("page") ?? 1),
  });
  const totalPages = await getProductPagesByDateRange({
    startDate: DateTime.now().startOf("week"),
    endDate: DateTime.now().endOf("week"),
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
    weekYear: loaderData.year,
    weekNumber: loaderData.week,
  });
  const previousWeek = urlDate.minus({ weeks: 1 });
  const nextWeek = urlDate.plus({ weeks: 1 });
  // luxon을 써야하는 이유
  const isToday = urlDate.equals(DateTime.now().startOf("week"));

  return (
    <div className="space-y-10">
      <Hero
        title={`best of week ${urlDate
          .startOf("week")
          .toLocaleString(DateTime.DATE_SHORT)} - ${urlDate
          .endOf("week")
          .toLocaleString(DateTime.DATE_SHORT)}`}
        description="The best product of the week"
      />
      <div className="flex items-center justify-center gap-2">
        <Button variant="secondary" asChild>
          <Link
            to={`/products/leaderboards/weekly/${previousWeek.year}/${previousWeek.weekNumber}`}
          >
            &larr; {previousWeek.toLocaleString(DateTime.DATE_SHORT)}
          </Link>
        </Button>
        {/* 오늘 날짜는 버튼 클릭 불가 */}
        {!isToday ? (
          <Button variant="secondary" asChild>
            <Link
              to={`/products/leaderboards/weekly/${nextWeek.year}/${nextWeek.weekNumber}`}
            >
              {nextWeek.toLocaleString(DateTime.DATE_SHORT)} &rarr;
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
            description={product.description}
            reviewsCount={product.reviews}
            viewCount={product.views.toString()}
            votesCount={product.upvotes}
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
