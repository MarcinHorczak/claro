import { ReactNode } from "react";
import { HeaderSpacer } from "./HeaderSpacer";

interface PageContainerProps {
  children: ReactNode;
}

export const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <div>
      <HeaderSpacer />
      {children}
    </div>
  );
};
