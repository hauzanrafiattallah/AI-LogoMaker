import { generateLogo } from "@/services/generate-logo";
import { FormLogoValues } from "@/global.types";
import { auth } from "@clerk/nextjs/server";


export const maxDuration = 60;

export async function POST(request: Request) {
  const payload: FormLogoValues = await request.json();
  const { userId } = await auth();
  try {
    const result = await generateLogo(payload);
    await storeLogo({
      userId: userId!,
      name: payload.name,
      description: payload.description,
      image: result,
    });
    return Response.json({ data: result });
  } catch (error) {
    console.error("Failed generate logo: ", error);
    return new Response(null, { status: 500 });
  }
}
