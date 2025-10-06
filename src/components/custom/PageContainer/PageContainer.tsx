import { ReactNode } from "react";
import { HeaderSpacer } from "./HeaderSpacer";

interface PageContainerProps {
  children: ReactNode;
  noTopPadding?: boolean;
  noBottomPadding?: boolean;
}

export const PageContainer = ({
  children,
  noTopPadding = false,
  noBottomPadding = false,
}: PageContainerProps) => {
  const topPadding = noTopPadding ? "" : "pt-16 md:pt-24";
  const bottomPadding = noBottomPadding ? "" : "pb-16 md:pb-32";

  return (
    <div>
      <HeaderSpacer />
      <div className={`${topPadding} ${bottomPadding}`}>{children}</div>
    </div>
  );
};
