"use client";

import { WizardsGameContextProvider } from "./context/WizardContext";

type Props = {
  children: React.ReactNode;
};
const ContextWrapper = ({ children }: Props) => {
  return <WizardsGameContextProvider>{children}</WizardsGameContextProvider>;
};

export default ContextWrapper;
