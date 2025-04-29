import type { MetaFunction } from "react-router";
import { Hero } from "../../../common/components/hero";
import { CategoryCard } from "../components/category-card";

export const meta: MetaFunction = () => {
  return [
    { title: "Categories | Had A Good Day" },
    { name: "description", content: "Browse products by category" },
  ];
};

export function loader({ request }: { request: Request }) {
  return {};
}

export function action({ request }: { request: Request }) {
  return {};
}

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Hero title="Categories" description="Browse products by category" />
      <div className="grid grid-cols-4 gap-10">
        {Array.from({ length: 10 }).map((_, index) => (
          <CategoryCard
            key={`categoryId-${index}`}
            id={`categoryId-${index}`}
            name="Category Name"
            description="Category Description"
          />
        ))}
      </div>
    </div>
  );
}
