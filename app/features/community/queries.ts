import { posts, topics } from "./schema";
import db from "../../db";

export const getTopics = async () => {
  const allTopics = await db
    .select({
      name: topics.name,
      slug: topics.slug,
    })
    .from(topics);
  return allTopics;
};

export const getPosts = async () => {
  const allPosts = await db
    .select({
      post_id: posts.post_id,
      title: posts.title,
    })
    .from(posts);
  return allPosts;
};
