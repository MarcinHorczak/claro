import { useWindowSize } from "@uidotdev/usehooks";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config";

export const useBreakpoint = (
  breakpoint: "sm" | "md" | "lg" | "xl" | "2xl",
) => {
  const { width } = useWindowSize();
  const config = resolveConfig(tailwindConfig);

  const breakpointValue = config.theme.screens[breakpoint];

  return Number(width) >= parseInt(breakpointValue);
};
