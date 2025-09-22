import type { MetaFunction } from "react-router";
import {
  getCategory,
  getCategoryPages,
  getProductsByCategory,
} from "../queries";
import { Hero } from "~/common/components/hero";
import { ProductCard } from "../components/product-card";
import { z } from "zod";
import type { Route } from "./+types/category-page-2";
import ProductPagination from "~/common/components/product-pagination";

const paramsSchema = z.object({
  categoryId: z.coerce.number(),
});

export const meta: MetaFunction = () => {
  return [
    { title: "Category | Had A Good Day" },
    { name: "description", content: "Browse category" },
  ];
};

export const loader = async ({ params, request }: Route.LoaderArgs) => {
  const url = new URL(request.url);
  const page = url.searchParams.get("page") ?? 1;
  const { data, success } = paramsSchema.safeParse(params);
  if (!success) {
    throw new Response("Invalid category id", { status: 400 });
  }
  const category = await getCategory(Number(data.categoryId));

  const products = await getProductsByCategory({
    categoryId: Number(data.categoryId),
    page: Number(page),
  });
  const totalPages = await getCategoryPages(Number(data.categoryId));

  return { category, products, totalPages };
};

export default function CategoryPage2({ loaderData }: Route.ComponentProps) {
  return (
    <div className="space-y-10">
      <Hero
        title={loaderData.category.name}
        description={loaderData.category.description}
      />
      <div className="space-y-5 w-full max-w-screen-md mx-auto">
        {loaderData.products.map((product) => (
          <ProductCard
            key={product.product_id}
            id={product.product_id}
            name={product.name}
            description={product.tagline}
            reviewsCount={product.reviews}
            viewCount={product.views}
            votesCount={product.upvotes}
          />
        ))}
      </div>
      <ProductPagination totalPages={loaderData.totalPages} />
    </div>
  );
}
