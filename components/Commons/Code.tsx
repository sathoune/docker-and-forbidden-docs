import { ReactNode } from "react";

const Code = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <code className={`text-yellow-500 ${className}`}>{children}</code>;
};

export default Code;
