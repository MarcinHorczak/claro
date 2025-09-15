import dynamic from "next/dynamic";

export const NoSSRWrapper = dynamic(
  () =>
    Promise.resolve(({ children }: { children: React.ReactNode }) => (
      <>{children}</>
    )),
  { ssr: false },
);
