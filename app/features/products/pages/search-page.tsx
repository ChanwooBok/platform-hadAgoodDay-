import type { MetaFunction } from "react-router";
import { Hero } from "../../../common/components/hero";
import type { Route } from "./+types/search-page";
import { z } from "zod";
import { ProductCard } from "../components/product-card";
import ProductPagination from "~/common/components/product-pagination";
// 지금 이거 ProductPagination를 임포트하면 네비게이션이 안되는데 왜 그러지?
import { Input } from "~/common/components/ui/input";
import { Button } from "~/common/components/ui/button";
import { Form } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Search | Had A Good Day" },
    { name: "description", content: "Search for products" },
  ];
};

const paramsSchema = z.object({
  query: z.string().optional().default(""),
  page: z.coerce.number().optional().default(1),
});

export function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const { success, data: parsedData } = paramsSchema.safeParse(
    Object.fromEntries(url.searchParams)
  );
  if (!success) {
    throw new Error("Invalid search params");
  }
  return {
    query: parsedData.query,
    page: parsedData.page,
  };
}

export default function SearchPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Hero title="Search" description="Find products you're looking for" />
      <Form className="flex justify-center h-14 max-w-screen-sm items-center gap-2 mx-auto">
        <Input
          name="query"
          placeholder="Search for products"
          className="text-lg"
        />
        <Button type="submit">Search</Button>
      </Form>
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
