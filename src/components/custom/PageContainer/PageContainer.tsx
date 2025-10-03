import { ReactNode } from "react";
import { HeaderSpacer } from "./HeaderSpacer";

interface PageContainerProps {
  children: ReactNode;
  noPadding?: boolean;
}

export const PageContainer = ({
  children,
  noPadding = false,
}: PageContainerProps) => {
  return (
    <div>
      <HeaderSpacer />
      <div className={`${noPadding ? "" : "pb-16 pt-12 md:pb-32 md:pt-16"}`}>
        {children}
      </div>
    </div>
  );
};
