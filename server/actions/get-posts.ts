"use server";

import { db } from "@/server";

export default async function getPosts() {
  const posts = await db.query.postTable.findMany();

  if (!posts) {
    return { error: "No posts found" };
  } else return { success: posts };
}
