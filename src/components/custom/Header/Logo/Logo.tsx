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
  const showText = useBreakpoint("md");
  const [{ y }] = useWindowScroll();
  const isScrolled = !!y && y > 0;

  const textStyles = isScrolled ? "opacity-0" : "opacity-100";
  const logoStyles = isScrolled ? "translate-y-3" : "";

  return (
    <div className="flex flex-col items-center gap-1">
      <Link href={Paths.Home}>
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-full bg-primary transition-all duration-500 ease-in-out ${logoStyles}`}
        >
          <Image src={LogoIcon} alt="Logo" priority className="w-5" />
        </div>
      </Link>
      {showText && (
        <p
          className={`text-sm tracking-widest text-primary transition-all duration-500 ease-in-out ${textStyles}`}
        >
          {t("name")}
        </p>
      )}
    </div>
  );
};
