"use client";

import { useContext, useState } from "react";
import { FormLogoContext, FormLogoState } from "./context/form-logo-context";
import { FormLogoName } from "./form-logo-name";
import { FormLogoDescription } from "./form-logo-description";
import { FormLogoColors } from "./form-logo-colors";
import { FormLogoStyles } from "./form-logo-styles";

const FormStateComponent = () => {
  const formLogoContext = useContext(FormLogoContext);
  switch (formLogoContext.name) {
    case "name":
      return <FormLogoName />;
    case "description":
      return <FormLogoDescription />;
    case "colors":
      return <FormLogoColors />;
    case "style":
      return <FormLogoStyles />;
    case "generating":
      return <FormLogoResult />;
    default:
      return <></>;
  }
};

export const FormLogoMain = () => {
  const [state, setState] = useState<FormLogoState>({
    name: "name",
    values: { name: "", description: "", colors: [], style: "" },
    setState: () => {},
  });

  return (
    <FormLogoContext.Provider
      value={{
        ...state,
        setState: (partial) => {
          setState((prev) => ({ ...prev, ...partial }));
        },
      }}
    >
      <FormStateComponent />
    </FormLogoContext.Provider>
  );
};
