"use client";

import { useWindowScroll } from "@uidotdev/usehooks";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useBreakpoint } from "@utils";
import { Paths } from "@utils/paths";
import LogoIcon from "/public/logo.svg";

export const Logo = () => {
  const t = useTranslations();
  const isDesktop = useBreakpoint("md");
  const [{ y }] = useWindowScroll();
  const isScrolled = !!y && y > 0;

  const logoContainerStyles = isDesktop ? "flex-col gap-1" : "flex-row gap-3";
  const logoTransform = isDesktop && isScrolled ? "translate-y-3" : "";

  return (
    <div
      className={`relative flex items-center transition-all duration-500 ease-in-out ${logoContainerStyles}`}
    >
      <Link href={Paths.Home}>
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-full bg-primary transition-all duration-500 ease-in-out ${logoTransform}`}
        >
          <Image src={LogoIcon} alt="Logo" priority className="w-5" />
        </div>
      </Link>

      {isDesktop ? (
        <div className="relative">
          <p
            className={`text-sm tracking-widest text-primary transition-all duration-500 ease-in-out ${
              isScrolled ? "opacity-0" : "opacity-100"
            }`}
          >
            {t("name")}
          </p>
          <p
            className={`absolute text-sm tracking-widest text-primary transition-all duration-500 ease-in-out ${
              isScrolled ? "opacity-100" : "opacity-0"
            } ${isScrolled ? "-top-6 left-16" : "left-0 top-0"}`}
          >
            {t("name")}
          </p>
        </div>
      ) : (
        <p className="text-sm tracking-widest text-primary transition-all duration-500 ease-in-out">
          {t("name")}
        </p>
      )}
    </div>
  );
};
