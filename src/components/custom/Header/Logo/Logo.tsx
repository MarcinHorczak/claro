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
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary sm:h-24 sm:w-24">
        <Image src={LogoIcon} alt="Logo" priority className="w-6 sm:w-12" />
      </div>
      {showText && (
        <p className="text-[1.375rem] font-bold tracking-widest text-primary">
          {t("name")}
        </p>
      )}
    </div>
  );
};
