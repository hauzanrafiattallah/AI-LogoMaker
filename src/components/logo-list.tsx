"use server";

import { UsersImagesSelect } from "@/db/schema";
import { getMyLogo } from "@/services/get-my-logo";
import Image from "next/image";
import { Download, ImagePlus } from "lucide-react";
import { FormLandingPage } from "./forms/form-landing-page";
import { Button } from "./ui/button";
import Link from "next/link";

const LogoItem = ({ logo }: { logo: UsersImagesSelect }) => {
  return (
    <div className="flex flex-col gap-2 place-items-center">
      <Image
        src={logo.image}
        alt={logo.name}
        width={0}
        height={0}
        className="size-56 rounded-lg"
      />
      <Button asChild>
        <a href={logo.name} download={`${logo.name}.png`}>
          <Download /> Download
        </a>
      </Button>
      <h3 className="font-semibold text-lg mt-4">{logo.name}</h3>
      <p className="text-center line-clamp-2">{logo.description}</p>
    </div>
  );
};

const EmptyState = () => {
  return (
    <div className="flex flex-col gap-6 place-items-center mx-auto py-24">
      <h2 className="font-bold text-3xl">
        You don&apos;t have any generated logo
      </h2>
      <ImagePlus className="size-24 sm:size-28 lg:size-40" />
      <div className="space-y-2">
        <label>Generate a new logo</label>
        <FormLandingPage />
      </div>
    </div>
  );
};

export const LogoList = async () => {
  const logos = await getMyLogo();
  return (
    <>
      {logos.length !== 0 && (
        <>
          <div className="flex flex-row justify-between w-full self-start">
            <h2 className="font-bold text-3xl">Recent Logo</h2>
            <Button>
              <Link href="/create">Generate new logo</Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 mt-16">
            {logos.map((logo) => (
              <LogoItem key={logo.id} logo={logo} />
            ))}
          </div>
        </>
      )}
      {logos.length === 0 && <EmptyState />}
    </>
  );
};
