import { FormLogoMain } from "@/components/forms/form-logo-main";
import { Suspense } from "react";

export default function CreatePage() {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 py-24">
      <Suspense>
        <FormLogoMain />
      </Suspense>
    </main>
  );
}
