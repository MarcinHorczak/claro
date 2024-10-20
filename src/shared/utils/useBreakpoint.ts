import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config";
import { useWindowSize } from "@uidotdev/usehooks";

export const useBreakpoint = (
  breakpoint: "sm" | "md" | "lg" | "xl" | "2xl"
) => {
  const { width } = useWindowSize();
  const config = resolveConfig(tailwindConfig);

  const breakpointValue = config.theme.screens[breakpoint];

  return Number(width) >= parseInt(breakpointValue);
};
