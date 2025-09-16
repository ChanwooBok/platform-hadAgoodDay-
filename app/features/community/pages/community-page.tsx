import type { Route } from "./+types/community-page";
import { Button } from "~/common/components/ui/button";
import { Await, Form, Link, useSearchParams } from "react-router";
import { Hero } from "~/common/components/hero";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/common/components/ui/dropdown-menu";
import { ChevronDownIcon } from "lucide-react";
import { SORT_OPTIONS, PERIOD_OPTIONS } from "../constants";
import { Input } from "~/common/components/ui/input";
import { PostCard } from "../components/post-card";
import { getPosts, getTopics } from "../queries";
//import { Suspense } from "react";

export const meta: Route.MetaFunction = () => [
  { title: "Community" },
  { name: "description", content: "Join our community discussions" },
];

// <--- Getting topics and posts at the same time --->
// export const loader = async () => {
//   const [topics, posts] = await Promise.all([getTopics(), getPosts()]);

// <--- Showing loading state to user : using suspense & await in browser --->
// export const loader = async() => {
//   const topics = getTopics();
//   const posts = getPosts();
//   return {
//     topics,
//     posts,
//   };
// };

//<--- Server Loader --->
export const loader = async () => {
  const [topics, posts] = await Promise.all([getTopics(), getPosts()]);
  return {
    topics,
    posts,
  };
};

// <--- Client Loader --->
// export const clientLoader = async () => {
//   //const serverData = await serverLoader; // we can access the server data here as well
//   const [topics, posts] = await Promise.all([getTopics(), getPosts()]);
//   return {
//     topics,
//     posts,
//   };
// };

export default function CommunityPage({ loaderData }: Route.ComponentProps) {
  //const { posts } = loaderData; // using suspense & await in browser
  const [searchParams, setSearchParams] = useSearchParams();
  const sorting = searchParams.get("sorting") || "newest";
  const period = searchParams.get("period") || "all";
  return (
    <div>
      <Hero title="Community" description="Join our community discussions" />
      <div className="grid grid-cols-6 items-start gap-40">
        <div className="col-span-4 space-y-10">
          <div className="flex justify-between">
            <div className="space-y-5 w-full">
              <div className="flex items-center gap-5">
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1">
                    <span className="text-sm capitalize">{sorting}</span>
                    <ChevronDownIcon className="size-5" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {SORT_OPTIONS.map((option) => (
                      <DropdownMenuCheckboxItem
                        className="capitalize cursor-pointer"
                        key={option}
                        onCheckedChange={(checked: boolean) => {
                          if (checked) {
                            searchParams.set("sorting", option);
                            setSearchParams(searchParams);
                          }
                        }}
                      >
                        {option}
                      </DropdownMenuCheckboxItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                {sorting === "popular" && (
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1">
                      <span className="text-sm capitalize">{period}</span>
                      <ChevronDownIcon className="size-5" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {PERIOD_OPTIONS.map((option) => (
                        <DropdownMenuCheckboxItem
                          className="capitalize cursor-pointer"
                          key={option}
                          onCheckedChange={(checked: boolean) => {
                            if (checked) {
                              searchParams.set("period", option);
                              setSearchParams(searchParams);
                            }
                          }}
                        >
                          {option}
                        </DropdownMenuCheckboxItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
              </div>
              <Form className="w-2/3">
                <Input
                  type="text"
                  name="search"
                  placeholder="Search for discussions"
                />
              </Form>
            </div>
            <Button asChild>
              <Link to={`/community/submit`}>Create Discussion</Link>
            </Button>
          </div>
          {/* <Suspense fallback={<div>Loading...</div>}>
            <Await resolve={posts}>
              {(data) => (
                <div className="space-y-5">
                  {data.map((post) => (
                    <PostCard
                      key={post.post_id}
                      id={post.post_id}
                      title={post.title}
                      author={post.author}
                      authorAvatarUrl={post.author_avatar}
                      category={post.topic}
                      postedAt={post.created_at}
                      votesCount={post.upvotes}
                      expanded
                    />
                  ))}
                </div>
              )}
            </Await>
          </Suspense> */}
          <div className="space-y-5">
            {loaderData.posts.map((post) => (
              <PostCard
                key={post.post_id}
                id={post.post_id}
                title={post.title}
                author={post.author}
                authorAvatarUrl={post.author_avatar}
                category={post.topic}
                postedAt={post.created_at}
                votesCount={post.upvotes}
                expanded
              />
            ))}
          </div>
        </div>

        <aside className="col-span-2 space-y-5">
          <span className="text-sm font-bold text-muted-foreground uppercase">
            Topics
          </span>
          <div className="flex flex-col gap-2 items-start">
            {loaderData.topics.map((topic) => (
              <Button
                asChild
                variant={"link"}
                key={topic.slug}
                className="pl-0"
              >
                <Link to={`/community?topic=${topic.slug}`}>{topic.name}</Link>
              </Button>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}

// <--- Even when fetching data from browser, we can show a loading state to user --->
// export function HydrateFallback() {
//   return <div>loading.,,,..</div>;
// }
