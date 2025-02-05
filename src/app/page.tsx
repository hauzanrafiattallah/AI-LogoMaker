import { FormLandingPage } from "@/components/forms/form-landing-page";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto w-full px-4 max-w-7xl py-24 flex flex-col place-items-center gap-4">
      <h1 className="text-4xl font-black text-primary">AI Logo Maker</h1>
      <h2 className="text-xl font-semibold text-foreground/60">Craft logo wiht AI powered tools</h2>
      <p className="text-base">
        Start Creating a logo for your business and ready to use on website,
        print, brand, company
      </p>
      <FormLandingPage />
    </main>
  );
}
