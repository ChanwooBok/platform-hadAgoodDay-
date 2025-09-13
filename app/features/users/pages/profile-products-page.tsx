import type { Route } from "./+types/profile-products-page";
import { ProductCard } from "~/features/products/components/product-card";

export const meta: Route.MetaFunction = () => [
  { title: "User Products" },
  { name: "description", content: "View user products" },
];

export default function ProfileProductsPage() {
  return (
    <div className="flex flex-col gap-5">
      {Array.from({ length: 5 }).map((_, index) => (
        <ProductCard
          key={`productId-${index}`}
          id={`productId-${index}`}
          title="Product Name"
          description="Product Description"
          commentCount={12}
          viewCount={12}
          upVoteCount={120}
          author="John Doe"
          authorAvatarUrl="https://github.com/apple.png"
          category="Productivity"
          postedAt="12 hours ago"
        />
      ))}
    </div>
  );
}
