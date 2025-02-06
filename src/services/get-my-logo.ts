import { auth } from "@clerk/nextjs/server";

export const getMyLogo = async () => {
  const { userId } = await auth();
  if (!userId) {
    throw Error("User not found");
  }
  return 
};
