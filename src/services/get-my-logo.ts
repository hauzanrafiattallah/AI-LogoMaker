"use server";

import { db } from "@/db";
import { UsersImagesSelect, usersImageTable } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

export const getMyLogo = async (): Promise<UsersImagesSelect[]> => {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("User not found");
  }
  return await db.query.usersImageTable.findMany({
    where: eq(usersImageTable.userId, userId),
  });
};
