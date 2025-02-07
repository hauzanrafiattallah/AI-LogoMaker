import { LogoList } from "@/components/logo-list";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default function DasboardPage() {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 py-8 flex flex-col place-items-center">
      <Suspense fallback={<Loader2 className="animate-spin size-40 mt-24" />}>
        <LogoList />
      </Suspense>
    </main>
  );
}
