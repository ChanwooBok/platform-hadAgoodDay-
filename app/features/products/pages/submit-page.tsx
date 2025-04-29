import type { Route } from "./+types/submit-page";
import { Hero } from "../../../common/components/hero";
import { Form } from "react-router";
import InputPair from "~/common/components/input-pair";
import SelectPair from "~/common/components/select-pair";
import { Label } from "~/common/components/ui/label";
import { Input } from "~/common/components/ui/input";
import { useState } from "react";
export const meta: Route.MetaFunction = () => {
  return [
    { title: "Submit Product | Had A Good Day" },
    { name: "description", content: "Submit a new product" },
  ];
};

export default function SubmitPage() {
  // trying to pre show img people upload on the site by using useState and input onChange
  const [icon, setIcon] = useState<string | null>(null);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      setIcon(URL.createObjectURL(file));
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Hero
        title="Submit Product"
        description="Share your favorite products with the community"
      />
      <Form className="grid grid-cols-2 gap-10 max-w-screen-lg mx-auto">
        <div className="space-y-5">
          <InputPair
            label="Name"
            description="this is the name of the product"
            id="name"
            name="name"
            type="text"
            required
            placeholder="Name of the product"
          />
          <InputPair
            label="Tagline"
            description="60 characters or less"
            id="tagline"
            name="tagline"
            type="text"
            placeholder="e.g. The best way to manage your money"
            required
          />
          <InputPair
            label="URL"
            description="The url of the product"
            id="url"
            name="url"
            type="text"
            placeholder="https://example.com"
            required
          />
          <InputPair
            label="Description"
            description="A detailed description of the product"
            id="description"
            name="description"
            required
            type="text"
            placeholder="e.g. This is a description of the product"
            textArea
          />
          <SelectPair
            name="category"
            label="Category"
            required
            description="The category of the product"
            placeholder="Select a category"
            options={[
              { value: "1", label: "Category 1" },
              { value: "2", label: "Category 2" },
              { value: "3", label: "Category 3" },
            ]}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <div className="size-40 rounded-md shadow-xl overflow-hidden">
            {icon ? <img src={icon} className="w-full h-full" /> : null}
          </div>
          <Label className="flex flex-col gap-1">
            Icon
            <small className="text-muted-foreground">
              The icon of the product
            </small>
          </Label>
          <Input
            type="file"
            className="w-1/2"
            onChange={onChange}
            required
            name="icon"
          />
          <div className="flex flex-col text-xs">
            <span className=" text-muted-foreground">
              Recommended size: 128x128px
            </span>
            <span className=" text-muted-foreground">
              Allowed formats: PNG, JPEG
            </span>
            <span className=" text-muted-foreground">Max file size: 1MB</span>
          </div>
        </div>
      </Form>
    </div>
  );
}
