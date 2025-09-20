"use client";

import { useWindowScroll } from "@uidotdev/usehooks";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

export const Header = () => {
  const [{ y }] = useWindowScroll();
  const isScrolled = !!y && y > 0;

  const scrolledStyles = isScrolled ? "py-3 xl:py-1 shadow-lg" : "py-5 xl:py-3";

  return (
    <div
      className={`duration-400 fixed z-50 flex w-full items-center justify-between bg-slate-100 px-10 transition-all ${scrolledStyles} xl:px-20`}
    >
      <Logo />
      <Navigation />
    </div>
  );
};
