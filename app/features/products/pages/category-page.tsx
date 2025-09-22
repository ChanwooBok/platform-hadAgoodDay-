import type { MetaFunction } from "react-router";
import { ProductCard } from "../components/product-card";
import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/category-page";
import ProductPagination from "~/common/components/product-pagination";
import {
  getCategory,
  getCategoryPages,
  getProductsByCategory,
} from "../queries";
import { z } from "zod";

const paramsSchema = z.object({
  categoryId: z.coerce.number(),
});

export const loader = async ({ params }: Route.LoaderArgs) => {
  const category = await getCategory(Number(params.categoryId));

  return { category };
};

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Developer tools | Had A Good Day" },
    { name: "description", content: "Browse developer tools" },
  ];
};

export default function CategoryPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="space-y-10">
      <Hero
        title={loaderData.category.name}
        description={loaderData.category.description}
      />
      <div className="space-y-5 w-full max-w-screen-md mx-auto"></div>
    </div>
  );
}
