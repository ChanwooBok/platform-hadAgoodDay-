import type { Route } from "./+types/submit-post-page";
import { Button } from "~/common/components/ui/button";
import InputPair from "~/common/components/input-pair";
import { Form } from "react-router";
import SelectPair from "~/common/components/select-pair";
import { Hero } from "~/common/components/hero";

export const meta: Route.MetaFunction = () => [
  { title: "Create Post" },
  { name: "description", content: "Create a new community post" },
];

export default function SubmitPostPage() {
  return (
    <div className="space-y-10">
      <Hero title="Create discussion" description="Create a new discussion" />
      <Form className="space-y-10 max-w-screen-md mx-auto">
        <InputPair
          id="title"
          label="Title"
          description="Enter a descriptive title for your post"
          name="title"
          required
          type="text"
          placeholder="What's your post about?"
        />
        <SelectPair
          name="category"
          label="Category"
          required
          description="Select a category for your post"
          placeholder="Select a category"
          options={[
            { value: "general", label: "General" },
            { value: "job", label: "Job" },
            { value: "productivity", label: "Productivity" },
            { value: "other", label: "Other" },
          ]}
        />

        <InputPair
          id="content"
          label="Content"
          description="1000 characters max"
          name="content"
          required
          type="textarea"
          placeholder="What's your post about?"
          textArea
        />

        <Button type="submit" className="w-full">
          Create Post
        </Button>
      </Form>
    </div>
  );
}
