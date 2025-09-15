import { ReactNode } from "react";

export const ContentContainer = ({ children }: { children: ReactNode }) => (
  <div className="flex w-full justify-center">
    <div className="w-full max-w-[1170px]">{children}</div>
  </div>
);
