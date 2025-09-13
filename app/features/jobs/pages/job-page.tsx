import { DotIcon } from "lucide-react";
import type { Route } from "./+types/job-page";
import { Badge } from "~/common/components/ui/badge";
import { Button } from "~/common/components/ui/button";
export const meta: Route.MetaFunction = () => {
  return [
    { title: "Job Details | Had A Good Day" },
    { name: "description", content: "View job details" },
  ];
};

export default function JobPage() {
  return (
    <div className="space-x-10">
      <div className="bg-gradient-to-tr from-primary/80 to-primary/10 h-60 w-full rounded-lg"></div>
      <div className="grid grid-cols-6 -mt-20 gap-20 items-start">
        <div className="col-span-4 space-y-10">
          <div>
            <img
              src="https://github.com/facebook.png"
              className="rounded-full border-2 border-white size-40 relative"
            />
            <h1 className="text-4xl font-bold">Software Engineer</h1>
            <h4 className="text-lg text-muted-foreground">Meta Inc.</h4>
          </div>

          <div>
            <Badge>Full-time</Badge>
            <Badge>Remote</Badge>
          </div>

          <div className="space-y-2.5">
            <h4 className="text-2xl font-bold">Overview</h4>
            <p className="text-sm text-muted-foreground">
              This is full-time remote job. What you need to do is to build
              features for the company's product.
            </p>
          </div>

          <div className="space-y-2.5">
            <h4 className="text-2xl font-bold">Responsibilities</h4>
            <ul className="text-lg list-disc list-inside">
              {[
                "Designing and building features for the company's product",
                "Writing code in JavaScript and TypeScript",
                "Writing code in React and Next.js",
                "Writing code in Tailwind CSS and Shadcn UI",
                "Writing code in React and Next.js",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-2.5">
            <h4 className="text-2xl font-bold">Qualifications</h4>
            <ul className="text-lg list-disc list-inside">
              {[
                "Bachelor's degree in Computer Science or related field",
                "3+ years of experience in software development",
                "Strong understanding of React and Next.js",
                "Strong understanding of Tailwind CSS and Shadcn UI",
                "Strong understanding of React and Next.js",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-2.5">
            <h4 className="text-2xl font-bold">Benefits</h4>
            <ul className="text-lg list-disc list-inside">
              {[
                "Flexible working hours",
                "Remote work",
                "Health insurance",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-2.5">
            <h4 className="text-2xl font-bold">Skills</h4>
            <ul className="text-lg list-disc list-inside">
              {["React", "Next.js", "Tailwind CSS"].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-span-2 space-y-5 mt-32 sticky p-6 top-20 border rounded-lg">
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">Avg. Salary</span>
            <span className="text-2xl font-bold">$100,000 - $120,000</span>
          </div>

          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">Location</span>
            <span className="text-2xl font-bold">Remote</span>
          </div>

          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">
              Employment Type
            </span>
            <span className="text-2xl font-bold">Full-time</span>
          </div>

          <div className="flex">
            <span className="text-sm text-muted-foreground">
              Posted 2 days ago
            </span>
            <DotIcon className="size-4" />
            <span className="text-sm text-muted-foreground">395 views</span>
          </div>
          <Button className="w-full">Apply Now</Button>
        </div>
      </div>
    </div>
  );
}
