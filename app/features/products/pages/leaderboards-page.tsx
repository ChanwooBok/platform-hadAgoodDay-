import type { MetaFunction } from "react-router";
import { Hero } from "../../../common/components/hero";
import { ProductCard } from "../components/product-card";
import { Button } from "~/common/components/ui/button";
import { Link } from "react-router";
export function loader({ request }: { request: Request }) {
  return {};
}

export function action({ request }: { request: Request }) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "Leaderboards | Had A Good Day" },
    { name: "description", content: "View product leaderboards" },
  ];
};

export default function LeaderboardsPage() {
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
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
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
        <a
          href="/products/leaderboards/daily"
          className="text-lg self-center text-blue-500 hover:underline"
        >
          View Daily Leaderboard →
        </a>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight">
            Weekly Leaderboard
          </h2>
          <p className="text-xl font-light text-foreground">
            The best products made by our community this week.
          </p>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
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
        <a
          href="/products/leaderboards/weekly"
          className="text-lg self-center text-blue-500 hover:underline"
        >
          View Weekly Leaderboard →
        </a>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight">
            Monthly Leaderboard
          </h2>
          <p className="text-xl font-light text-foreground">
            The best products made by our community this month.
          </p>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
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
        <a
          href="/products/leaderboards/monthly"
          className="text-lg self-center text-blue-500 hover:underline"
        >
          View Monthly Leaderboard →
        </a>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight">
            Yearly Leaderboard
          </h2>
          <p className="text-xl font-light text-foreground">
            The best products made by our community this year.
          </p>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
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
        <a
          href="/products/leaderboards/yearly"
          className="text-lg self-center text-blue-500 hover:underline"
        >
          View Yearly Leaderboard →
        </a>
      </div>
    </div>
  );
}
