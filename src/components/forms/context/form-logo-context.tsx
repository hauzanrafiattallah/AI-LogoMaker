"use client";

import { FormLogoValues } from "@/global.types";
import { createContext } from "react";

export type FormLogoStateName =
  | "name"
  | "description"
  | "colors"
  | "style"
  | "generating";

export type FormLogoState = {
  name: FormLogoStateName;
  values: FormLogoValues;
  setState: (partial: Partial<FormLogoState>) => void;
};

export const FormLogoContext = createContext<FormLogoState>({
  name: "name",
  values: { name: "", description: "", colors: [], style: "" },
  setState: () => {},
});
