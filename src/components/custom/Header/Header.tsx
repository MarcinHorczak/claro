"use client";

import { useWindowScroll } from "@uidotdev/usehooks";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

export const Header = () => {
  const [{ y }] = useWindowScroll();
  const isScrolled = !!y && y > 0;

  const scrolledStyles = isScrolled
    ? "py-3 xl:py-1 shadow-lg bg-white/95 backdrop-blur-sm"
    : "py-5 xl:py-3 bg-white/90 backdrop-blur-sm";

  return (
    <div
      className={`duration-400 fixed z-50 flex w-full items-center justify-between px-10 transition-all ${scrolledStyles} border-b xl:px-20`}
    >
      <Logo />
      <Navigation />
    </div>
  );
};
