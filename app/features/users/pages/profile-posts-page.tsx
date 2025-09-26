import { PostCard } from "~/features/community/components/post-card";
import type { Route } from "./+types/profile-posts-page";
import { getUserPosts } from "../queries";
import { DateTime } from "luxon";

export const meta: Route.MetaFunction = () => [
  { title: "User Posts" },
  { name: "description", content: "View user posts" },
];

export const loader = async ({ params }: Route.LoaderArgs) => {
  const posts = await getUserPosts(params.username);
  console.log(posts);
  return { posts };
};

export default function ProfilePostsPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="flex flex-col gap-5">
      {loaderData.posts.map((post) => (
        <PostCard
          key={post.post_id}
          id={post.post_id}
          title={post.title}
          author={post.profile.name}
          authorAvatarUrl={post.profile.avatar}
          category="Productivity"
          postedAt="12 hours ago"
          expanded
        />
      ))}
    </div>
  );
}
