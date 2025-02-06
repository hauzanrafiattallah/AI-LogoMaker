"use server";

import { db } from "@/db";
import { UsersImagesInsert, usersImageTable } from "@/db/schema";

export const storeLogo = async (payload: UsersImagesInsert) => {
  await db.insert(usersImageTable).values(payload);
};
