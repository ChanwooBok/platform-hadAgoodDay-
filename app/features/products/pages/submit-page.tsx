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
    { title: "Submit Product | Had A Good Day" },
    { name: "description", content: "Submit a new product" },
  ];
};

export default function SubmitPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Hero
        title="Submit Product"
        description="Share your favorite products with the community"
      />
      {/* Submit form will be added here */}
    </div>
  );
}
