"use server";

import { db } from "@/db";


export const storeLogo = async (payload: UserImagesInsert) => {
  await db.insert(userImageTable).values(payload);
};
