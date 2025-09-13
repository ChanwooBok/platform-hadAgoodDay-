import type { Route } from "./+types/dashboard-products-page";
import { Hero } from "~/common/components/hero";
import { Button } from "~/common/components/ui/button";
import { Link } from "react-router";

export const meta: Route.MetaFunction = () => [
  { title: "My Products" },
  { name: "description", content: "Manage your products" },
];

export default function DashboardProductsPage() {
  return (
    <div className="space-y-10">
      <Hero title="My Products" description="Manage your products" />
      <div className="flex justify-end">
        <Button asChild>
          <Link to="/products/submit">Submit Product</Link>
        </Button>
      </div>
      <div className="grid gap-5">{/* Products will be rendered here */}</div>
    </div>
  );
}
