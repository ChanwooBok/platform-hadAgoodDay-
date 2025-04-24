import type { MetaFunction } from "react-router";
import { redirect } from "react-router";
export function loader() {
  return redirect("/products/leaderboards");
}

export function action({ request }: { request: Request }) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "Products | Had A Good Day" },
    { name: "description", content: "Browse and discover products" },
  ];
};
