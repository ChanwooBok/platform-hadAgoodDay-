import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/common/components/ui/breadcrumb";
import type { Route } from "./+types/post-page";
import { Link } from "react-router";
import {
  ChevronUpIcon,
  DotIcon,
  MessageCircleIcon,
  UserIcon,
} from "lucide-react";
import { Button } from "~/common/components/ui/button";
import { Textarea } from "~/common/components/ui/textarea";
import { Form } from "react-router";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/common/components/ui/avatar";
import { Badge } from "~/common/components/ui/badge";
import { Reply } from "../components/reply";

export const meta: Route.MetaFunction = () => [
  { title: "Post" },
  { name: "description", content: "View community post" },
];

export default function PostPage() {
  return (
    <div className="space-y-10">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/community">Community</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/community?topic=productivity">Productivity</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/community/postId">
                What is the best productivity tool?
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="grid grid-cols-6 gap-40 items-start">
        <div className="col-span-4 space-y-10">
          <div className="flex w-full items-start gap-10">
            <Button variant="outline" className="flex flex-col h-14">
              <ChevronUpIcon className="size-4 shrink-0" />
              <span>10</span>
            </Button>
            <div className="space-y-20">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold">
                  What is the best productivity tool?
                </h2>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>@nico</span>
                  <DotIcon className="size-5" />
                  <span>12 hours ago</span>
                  <DotIcon className="size-5" />
                  <span>10 replies</span>
                </div>
                <p className="text-muted-foreground w-3/4">
                  Hello, I'm looking for a productivity tool that can help me
                  manage my tasks and projects. Any recommendations? I have
                  tried Notion, but it's not what I'm looking for. I dream of a
                  tool that can help me manage my tasks and projects. Any
                  recommendations?
                </p>
              </div>
              <Form className="flex items-start gap-5 w-3/4">
                <Avatar className="size-14">
                  <AvatarFallback>N</AvatarFallback>
                  <AvatarImage src="https://github.com/chanwoobok.png" />
                </Avatar>
                <div className="flex flex-col gap-5 items-end w-full">
                  <Textarea
                    placeholder="Write a reply"
                    className="w-full resize-none"
                    rows={5}
                  />
                  <Button>Reply</Button>
                </div>
              </Form>
              <div className="space-y-10">
                <h4 className="text-lg font-bold">10 replies</h4>
                <Reply
                  id="1"
                  content="I'm using Notion, but it's not what I'm looking for. I dream of a tool that can help me manage my tasks and projects. Any recommendations?"
                  author={{
                    id: "1",
                    username: "woo",
                    avatarUrl: "https://github.com/chanwoobok.png",
                  }}
                  createdAt="12 hours ago"
                  onReply={() => {
                    // Handle reply click
                  }}
                  topLevel
                />
              </div>
            </div>
          </div>
        </div>
        <aside className="col-span-2 border rounded-lg p-5 shadow-sm">
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
          <div className="gap-2 text-sm flex flex-col">
            <span>joined 3 months ago</span>
            <span>100 posts</span>
            <span>100 replies</span>
          </div>
          <Button variant="outline" className="w-full">
            Follow
          </Button>
        </aside>
      </div>
    </div>
  );
}
