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
    { title: "Search | Had A Good Day" },
    { name: "description", content: "Search for products" },
  ];
};

export default function SearchPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Hero title="Search" description="Find products you're looking for" />
      {/* Search form and results will be added here */}
    </div>
  );
}
