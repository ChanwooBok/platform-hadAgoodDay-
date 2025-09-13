import type { Route } from "./+types/team-page";
import { Button } from "~/common/components/ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { Badge } from "~/common/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/common/components/ui/breadcrumb";
import { Form, Link } from "react-router";
import { Hero } from "~/common/components/hero";
import InputPair from "~/common/components/input-pair";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";

export const meta: Route.MetaFunction = () => [
  { title: "Team" },
  { name: "description", content: "View team details" },
];

export default function TeamPage() {
  return (
    <div className="space-y-20">
      <Hero title="Team" description="View team details" />
      <div className="grid grid-cols-6 gap-40 items-start">
        <div className="col-span-4 grid grid-cols-4 gap-5">
          {[
            { title: "Product Name", value: "Doggy Social" },
            { title: "Stage", value: "Pre-seed" },
            { title: "Team size", value: "3" },
            { title: "Available equity", value: "4" },
          ].map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {item.title}
                </CardTitle>
                <CardContent className="p-0 font-bold text-2xl">
                  {item.value}
                </CardContent>
              </CardHeader>
            </Card>
          ))}
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Team members
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 font-bold text-2xl">
              <ul className="text-lg list-disc list-inside">
                {[
                  "React Developer",
                  "Backend Developer",
                  "Product Manager",
                  "UI/UX Designer",
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Idea description
              </CardTitle>
              <CardContent className="p-0 font-medium text-xl">
                <p>
                  Doggie Social is a social media platform for dogs. It allows
                  dogs to connect with each other and share their experiences.
                </p>
              </CardContent>
            </CardHeader>
          </Card>
        </div>

        <aside className="col-span-2 space-y-5 border rounded-lg p-6 shadow-sm">
          <div className="flex gap-5">
            <Avatar className="size-14">
              <AvatarFallback>N</AvatarFallback>
              <AvatarImage src="https://github.com/chanwoobok.png" />
            </Avatar>
            <div className="flex flex-col">
              <h4 className="text-lg font-bold">woo</h4>
              <Badge variant="secondary">influencer</Badge>
            </div>
          </div>
          <Form className="space-y-5">
            <InputPair
              label="Introduce yourself"
              description="Tell us about yourself"
              name="introduction"
              type="text"
              id="introduction"
              required
              textArea
              placeholder="i.e. I'm a React Developer with 3 years of experience"
            />
            <Button type="submit" className="w-full">
              Get in touch
            </Button>
          </Form>
        </aside>
      </div>
    </div>
  );
}
