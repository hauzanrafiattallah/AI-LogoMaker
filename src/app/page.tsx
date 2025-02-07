import { FormLandingPage } from "@/components/forms/form-landing-page";
import Image from "next/image";

export default function Home() {
  const arr = new Array(12).fill("");
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
      <h2 className="text-2xl font-black text-primary mt-20">Popular Logos</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
        {arr.map((v, i) => (
          <Image
            key={i}
            width={512}
            height={512}
            src={`/images/${i}.png`}
            className="size-40 sm:size-60 xl:size-72 rounded-xl"
            alt={`${i}`}
          />
        ))}
      </div>
    </main>
  );
}
