"use client";

import { useContext, useState } from "react";
import { FormLogoContext, FormLogoState } from "./context/form-logo-context";
import { FormLogoName } from "./form-logo-name";
import { FormLogoDescription } from "./form-logo-description";

const FormStateComponent = () => {
  const formLogoContext = useContext(FormLogoContext);
  switch (formLogoContext.name) {
    case "name":
      return <FormLogoName />;
    case "description":
      return <FormLogoDescription />;
      return;
    default:
      return <div>Defatult</div>;
  }
};

export const FormLogoMain = () => {
  const [state, setState] = useState<FormLogoState>({
    name: "name",
    values: { name: "", description: "" },
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
