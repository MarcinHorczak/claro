"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { ContentContainer, HeaderSpacer, InfoCard } from "@components/custom";
import { useBreakpoint } from "@utils";
import { useWorkshopsInfo } from "./page.utils";
import WorkshopsImage from "/public/images/workshops.webp";

const Workshops = () => {
  const t = useTranslations();
  const isDesktop = useBreakpoint("md");

  const workshopsInfo = useWorkshopsInfo();

  return (
    <div>
      <HeaderSpacer />
      <div className="h-[85vh] w-full">
        <div className="relative z-[-1] h-full w-full">
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-white via-white/60 to-transparent">
            <div className="mx-auto flex flex-col gap-3 rounded-t-3xl px-20 py-4 text-center">
              <h1 className="font-header font-bold text-primary">
                {t("offers.workshops.title")}
              </h1>
              {isDesktop && (
                <p className="whitespace-pre-wrap text-xl text-gray-600">
                  {t("offers.workshops.description")}
                </p>
              )}
            </div>
          </div>
          <Image
            src={WorkshopsImage}
            alt="Workshops"
            className="z-[-2] object-cover"
            priority
            fill
          />
        </div>
      </div>
      {!isDesktop && (
        <p className="text-md px-6 text-justify indent-8 leading-relaxed text-gray-600">
          {t("offers.workshops.description")}
        </p>
      )}
      <ContentContainer>
        <div
          className="grid gap-8 px-4 py-16"
          style={{
            gridRow: isDesktop ? 2 : 1,
            gridColumn: isDesktop ? 2 : 1,
            gridTemplateAreas: isDesktop
              ? `"info info""topic if"`
              : `"info""topic""if"`,
          }}
        >
          {workshopsInfo.map((info) => (
            <div
              style={{ gridArea: info.gridArea }}
              key={info.gridArea}
              className="flex flex-1 flex-row"
            >
              <InfoCard
                titleKey={info.titleKey}
                descriptionKey={info.descriptionKey}
              />
            </div>
          ))}
        </div>
      </ContentContainer>
    </div>
  );
};

export default Workshops;
