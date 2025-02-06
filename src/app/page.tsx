import { FormLandingPage } from "@/components/forms/form-landing-page";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto w-full px-4 max-w-7xl py-24 flex flex-col place-items-center gap-4">
      <h1 className="text-4xl font-black text-primary text-center">
        AI Logo Maker
      </h1>
      <h2 className="text-xl font-semibold text-foreground/60 text-center">
        Instantly Generate Unique Logos with AI
      </h2>
      <p className="text-base text-center ">
        Create professional and unique logos in seconds using AI. No design
        skills needed—just enter your brand name, and let AI generate stunning
        logos for your business.
      </p>
      <FormLandingPage />
    </main>
  );
}
