import type { MetaFunction } from "react-router";
import { Hero } from "../../../common/components/hero";
import { ProductCard } from "../components/product-card";
import { Button } from "~/common/components/ui/button";
import { Link } from "react-router";
import { getProductsByDateRange } from "../queries";
import { DateTime } from "luxon";
import type { Route } from "./+types/leaderboards-page";

export const loader = async () => {
  const [dailyProducts, weeklyProducts, monthlyProducts, yearlyProducts] =
    await Promise.all([
      getProductsByDateRange({
        startDate: DateTime.now().startOf("day"),
        endDate: DateTime.now().endOf("day"),
        limit: 7,
        page: 1,
      }),
      getProductsByDateRange({
        startDate: DateTime.now().startOf("week"),
        endDate: DateTime.now().endOf("week"),
        limit: 7,
        page: 1,
      }),
      getProductsByDateRange({
        startDate: DateTime.now().startOf("month"),
        endDate: DateTime.now().endOf("month"),
        limit: 7,
        page: 1,
      }),
      getProductsByDateRange({
        startDate: DateTime.now().startOf("year"),
        endDate: DateTime.now().endOf("year"),
        limit: 7,
        page: 1,
      }),
    ]);
  return {
    dailyProducts,
    weeklyProducts,
    monthlyProducts,
    yearlyProducts,
  };
};

export function action({ request }: { request: Request }) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "Leaderboards | Had A Good Day" },
    { name: "description", content: "View product leaderboards" },
  ];
};

export default function LeaderboardsPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <Hero title="Leaderboards" description="the most popular products" />
      {/* Leaderboard navigation will be added here */}
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight">
            Daily Leaderboard
          </h2>
          <p className="text-xl font-light text-foreground">
            The best products made by our community today.
          </p>
          <a
            href="/products/leaderboards/daily"
            className="text-lg self-center text-blue-500 hover:underline"
          >
            View Daily Leaderboard →
          </a>
        </div>

        {loaderData.dailyProducts.map((product) => (
          <ProductCard
            key={product.product_id.toString()}
            id={product.product_id.toString()}
            name={product.name}
            description={product.tagline}
            reviewsCount={product.reviews}
            viewCount={product.views}
            votesCount={product.upvotes}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight">
            Weekly Leaderboard
          </h2>
          <p className="text-xl font-light text-foreground">
            The best products made by our community this week.
          </p>
          <a
            href="/products/leaderboards/weekly"
            className="text-lg self-center text-blue-500 hover:underline"
          >
            View Weekly Leaderboard →
          </a>
        </div>
        {loaderData.weeklyProducts.map((product) => (
          <ProductCard
            key={product.product_id.toString()}
            id={product.product_id.toString()}
            name={product.name}
            description={product.tagline}
            reviewsCount={product.reviews}
            viewCount={product.views}
            votesCount={product.upvotes}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight">
            Monthly Leaderboard
          </h2>
          <p className="text-xl font-light text-foreground">
            The best products made by our community this month.
          </p>

          <a
            href="/products/leaderboards/monthly"
            className="text-lg self-center text-blue-500 hover:underline"
          >
            View Monthly Leaderboard →
          </a>
        </div>
        {loaderData.monthlyProducts.map((product) => (
          <ProductCard
            key={product.product_id.toString()}
            id={product.product_id.toString()}
            name={product.name}
            description={product.tagline}
            reviewsCount={product.reviews}
            viewCount={product.views}
            votesCount={product.upvotes}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight">
            Yearly Leaderboard
          </h2>
          <p className="text-xl font-light text-foreground">
            The best products made by our community this year.
          </p>
          <a
            href="/products/leaderboards/yearly"
            className="text-lg self-center text-blue-500 hover:underline"
          >
            View Yearly Leaderboard →
          </a>
        </div>
        {loaderData.yearlyProducts.map((product) => (
          <ProductCard
            key={product.product_id.toString()}
            id={product.product_id.toString()}
            name={product.name}
            description={product.tagline}
            reviewsCount={product.reviews}
            viewCount={product.views}
            votesCount={product.upvotes}
          />
        ))}
      </div>
    </div>
  );
}
