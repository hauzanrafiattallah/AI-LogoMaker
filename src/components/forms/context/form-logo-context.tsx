"use client";

import { createContext } from "react";

export type FormLogoValues = {
  name: string;
  description: string;
  colors: string[];
};

export type FormLogoStateName = "name" | "description" | "colors";

export type FormLogoState = {
  name: FormLogoStateName;
  values: FormLogoValues;
  setState: (partial: Partial<FormLogoState>) => void;
};

export const FormLogoContext = createContext<FormLogoState>({
  name: "name",
  values: { name: "", description: "", colors: [] },
  setState: () => {},
});
