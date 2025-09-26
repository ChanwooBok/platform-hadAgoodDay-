import client from "~/supa-client";

export const getUserProfile = async (username: string) => {
  const { data, error } = await client
    .from("profiles")
    .select(
      `
    profile_id,
    name,
    username,
    avatar,
    role,
    headline,
    bio
  `
    )
    .eq("username", username)
    .single();
  if (error) throw error;
  return data;
};

export const getProfileIdByUsername = async (username: string) => {
  const { data, error } = await client
    .from("profiles")
    .select("profile_id")
    .eq("username", username)
    .single();
  if (error) throw error;
  return data.profile_id;
};

export const getUserProducts = async (username: string) => {
  const profileId = await getProfileIdByUsername(username);
  const { data, error } = await client
    .from("products")
    .select(
      `
      *,
      profile:profiles!profile_id (
        name,
        avatar
      )
    `
    )
    .eq("profile_id", profileId)
    .order("created_at", { ascending: false });
  if (error) throw error;
  return data;
};

export const getUserPosts = async (username: string) => {
  const { data, error } = await client
    .from("community_post_list_view")
    .select("*")
    .eq("author_username", username);
  if (error) throw error;
  return data;
};
