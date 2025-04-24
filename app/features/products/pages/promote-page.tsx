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
    { title: "Promote Product | Had A Good Day" },
    { name: "description", content: "Promote your product" },
  ];
};

export default function PromotePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Hero
        title="Promote Product"
        description="Get more visibility for your product"
      />
      {/* Promote form will be added here */}
    </div>
  );
}
