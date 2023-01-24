import { ReactNode } from "react";

const Lif = ({ children }: { children: ReactNode }) => {
  return <li className="fragment fade-in-then-semi-out">{children}</li>;
};

export default Lif;
