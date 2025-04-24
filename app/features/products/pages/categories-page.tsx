import type { MetaFunction } from "react-router";
import { Hero } from "../../../common/components/hero";

export function loader({ request }: { request: Request }) {
  return {};
}

export function action({ request }: { request: Request }) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "Categories | Had A Good Day" },
    { name: "description", content: "Browse products by category" },
  ];
};

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Hero title="Categories" description="Browse products by category" />
      {/* Category grid will be added here */}
    </div>
  );
}
