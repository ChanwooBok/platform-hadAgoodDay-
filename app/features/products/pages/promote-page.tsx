import { Form, type MetaFunction } from "react-router";
import { Hero } from "../../../common/components/hero";
import SelectPair from "~/common/components/select-pair";

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
        description="Promote your product to the world"
      />
      <Form className="max-w-screen-sm mx-auto">
        <SelectPair
          name="promote"
          label="Promote"
          required
          description="Promote your product"
          placeholder="Select a product"
          options={[
            { value: "1", label: "Product 1" },
            { value: "2", label: "Product 2" },
            { value: "3", label: "Product 3" },
          ]}
        />
      </Form>
    </div>
  );
}
