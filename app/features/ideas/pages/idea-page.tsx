import { EyeIcon, HeartIcon } from "lucide-react";
import { DotIcon } from "lucide-react";
import { Hero } from "~/common/components/hero";
import { Button } from "~/common/components/ui/button";

export const meta = () => {
  return [
    { title: `IdeasGPT | wemake` },
    { name: "description", content: "Find ideas for your next project" },
  ];
};
export default function IdeaPage() {
  return (
    <div>
      <Hero title="Idea" description="Idea" />
      <div className="max-w-screen-sm mx-auto flex flex-col items-center gap-10">
        <p className="italic">
          A startup that crates an AI-powered productivity tool,delivering
          custom AI prompts to users tracking their productivity and providing
          insights on their progress.
        </p>
        <div className="flex items-center text-sm">
          <div className="flex gap-2">
            <EyeIcon className="w-4 h-4" />
            <span>123</span>
          </div>
          <DotIcon className="w-4 h-4" />
          <span>10hours ago</span>
          <DotIcon className="w-4 h-4" />
          <Button variant="outline">
            <HeartIcon className="w-4 h-4" />
            <span>12</span>
          </Button>
        </div>
        <Button size="lg">Claim idea now &rarr;</Button>
      </div>
    </div>
  );
}
