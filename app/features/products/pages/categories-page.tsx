import type { MetaFunction } from "react-router";
import { Hero } from "../../../common/components/hero";
import { CategoryCard } from "../components/category-card";
import { getCategories } from "../queries";
import type { Route } from "./+types/categories-page";

export const loader = async () => {
  const categories = await getCategories();
  return { categories };
};

export const meta: MetaFunction = () => {
  return [
    { title: "Categories | Had A Good Day" },
    { name: "description", content: "Browse products by category" },
  ];
};

export default function CategoriesPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="space-y-10">
      <Hero title="Categories" description="Browse products by category" />
      <div className="grid grid-cols-4 gap-10">
        {loaderData.categories.map((category) => (
          <CategoryCard
            key={category.category_id}
            id={category.category_id}
            name={category.name}
            description={category.description}
          />
        ))}
      </div>
    </div>
  );
}
