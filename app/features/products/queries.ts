import { DateTime } from "luxon";
import client from "~/supa-client";

export const getProductsByDateRange = async ({
  startDate,
  endDate,
  limit,
}: {
  startDate: DateTime;
  endDate: DateTime;
  limit: number;
}) => {
  const { data, error } = await client
    .from("products")
    .select(
      `
          product_id,
          name,
          description,
          upvotes:stats->>upvotes,
          views:stats->>views,
          reviews:stats->>reviews
      `
    )
    .order("stats->>upvotes", { ascending: false })
    .limit(limit);
  if (error) throw error;
  console.log("test: ", data);
  return data;
};
