import { StarIcon } from "lucide-react";
import { ChevronUpIcon } from "lucide-react";
import { Link, NavLink, Outlet } from "react-router";
import { Button, buttonVariants } from "~/common/components/ui/button";
import { cn } from "~/lib/utils";

export default function ProductOverviewLayout() {
  return (
    <div className=" space-y-10">
      <div className="flex justify-between">
        <div className="flex flex-col gap-10">
          <div className="flex gap-10">
            <div className="ml-10 size-40 rounded-xl shadow-xl bg-primary/50"></div>
            <div>
              <h1 className="text-5xl font-bold">Product Name</h1>
              <p className="text-2xl text-light">Product Description</p>
              <div className="mt-5 flex items-center gap-5">
                <div className="flex text-yellow-400">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <StarIcon className="size-6" fill="currentColor" />
                  ))}
                </div>
                <span className="text-sm text-light">100 reviews</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-5 mr-10">
            <Button
              variant={"secondary"}
              size="lg"
              className="text-lg h-14 px-10"
            >
              Visit website
            </Button>
            <Button size="lg" className="text-lg h-14 px-10">
              <ChevronUpIcon className="size-4 mr-2" />
              Upvote (100)
            </Button>
          </div>
        </div>
      </div>
      <div className="flex gap-5">
        <NavLink
          className={({ isActive }) =>
            cn(
              buttonVariants({ variant: "outline" }),
              isActive && "bg-accent text-foreground"
            )
          }
          to={`/products/1/overview`}
        >
          Overview
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            cn(
              buttonVariants({ variant: "outline" }),
              isActive && "bg-accent text-foreground"
            )
          }
          to={`/products/1/reviews`}
        >
          Reviews
        </NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
// childeren will be rendered in <Outlet />
// Outlet is a component that renders the child routes
//layout("features/products/layouts/product-overview-layout.tsx", [
//   route("/overview", "features/products/pages/product-overview-page.tsx"),
//     ...prefix("/reviews", [
//       index("features/products/pages/product-reviews-page.tsx"),
//       route("/new", "features/products/pages/new-product-review-page.tsx"),
//     ]),
// In this code, we set up layout's children routes.
