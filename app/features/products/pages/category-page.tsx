import type { MetaFunction } from "react-router";
import type { Route } from "./+types/category-page";
import { ProductCard } from "../components/product-card";
import { Hero } from "~/common/components/hero";
import ProductPagination from "~/common/components/product-pagination";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Developer tools | Had A Good Day" },
    { name: "description", content: "Browse developer tools" },
  ];
};

export default function CategoryPage({}) {
  return (
    <div className="space-y-10">
      <Hero
        title={"Developer Tools"}
        description={`Tools for developers to build products faster`}
      />

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
