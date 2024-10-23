"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useBreakpoint } from "@utils";
import LogoIcon from "/public/logo.svg";

export const Logo = () => {
  const t = useTranslations();
  const showText = useBreakpoint("md");

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary">
        <Image src={LogoIcon} alt="Logo" priority className="w-7" />
      </div>
      {showText && (
        <p className="font-bold tracking-widest text-primary">{t("name")}</p>
      )}
    </div>
  );
};
