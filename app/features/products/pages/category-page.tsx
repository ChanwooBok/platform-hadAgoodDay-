import type { MetaFunction } from "react-router";
import { Hero } from "../../../common/components/hero";

export function loader({
  request,
  params,
}: {
  request: Request;
  params: { category: string };
}) {
  const { category } = params;
  return { category };
}

export function action({ request }: { request: Request }) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "Category | Had A Good Day" },
    { name: "description", content: "View products in this category" },
  ];
};

export default function CategoryPage({
  loaderData,
}: {
  loaderData: { category: string };
}) {
  const { category } = loaderData;

  return (
    <div className="container mx-auto px-4 py-8">
      <Hero title={category} description={`Products in ${category}`} />
      {/* Category products will be added here */}
    </div>
  );
}
