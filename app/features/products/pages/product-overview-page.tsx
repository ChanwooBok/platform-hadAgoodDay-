import { ChevronUpIcon, StarIcon } from "lucide-react";
import { Button } from "~/common/components/ui/button";
import { Link } from "react-router";
import type { Route } from "./+types/product-overview-page";
import { useOutletContext } from "react-router";

export default function ProductOverviewPage() {
  const { description, how_it_works } = useOutletContext<{
    how_it_works: string;
    description: string;
  }>();
  return (
    <div className="ml-10 space-y-10">
      <div className="space-y-1">
        <h3 className="text-lg font-bold">What is this product?</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="space-y-1">
        <h3 className="text-lg font-bold">How does it work?</h3>
        <p className="text-muted-foreground">{how_it_works}</p>
      </div>
    </div>
  );
}
