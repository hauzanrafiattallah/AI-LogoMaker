import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className="flex max-w-7xl w-full mx-auto sticky top-0 items-center justify-between h-14">
      <Link href="/" className="text-xl font-bold">
        AI LogoMaker
      </Link>
      <div className="flex gap-2 items-center">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <Button asChild>
            <Link href="/auth/sign-in">Sign In</Link>
          </Button>
        </SignedOut>
        <ThemeToggle />
      </div>
    </header>
  );
};
