"use client";

import { useTranslations } from "next-intl";
import {
  ContentContainer,
  HeaderSpacer,
  InfoCard,
  WorkshopsList,
} from "@components/custom";
import { useBreakpoint } from "@utils";
import { Workshop } from "@utils/db/client/workshops/workshops.types";
import { PolygonVariant } from "@utils/enums";
import { useWorkshopsInfo } from "./page.utils";

const WorkshopsClient = ({ workshops }: { workshops: Workshop[] }) => {
  const t = useTranslations();
  const isDesktop = useBreakpoint("md");

  const workshopsInfo = useWorkshopsInfo();

  // TODO: replace with workshops when they are ready
  const workshopList = [];

  return (
    <div>
      <HeaderSpacer />
      <div className="flex flex-col gap-16 py-16">
        <ContentContainer>
          <div className="flex flex-col gap-3 px-4 md:text-center">
            <h1 className="font-header text-3xl font-bold text-primary">
              {t("offers.workshops.title")}
            </h1>
            <p className="text-md whitespace-pre-wrap text-muted-foreground">
              {t("offers.workshops.description")}
            </p>
          </div>
        </ContentContainer>
        {workshopList.length > 0 && (
          <ContentContainer
            bgColor="bg-orange-100"
            polygonVariants={[
              PolygonVariant.TopLeft,
              PolygonVariant.BottomRight,
            ]}
          >
            <div className="px-4 py-16">
              <div className="mb-8">
                <h2 className="text-2xl font-bold tracking-tight text-primary">
                  {t("offers.workshops.offers.title")}
                </h2>
                <p className="mt-2 text-lg text-gray-600">
                  {t("offers.workshops.offers.description")}
                </p>
              </div>
              <WorkshopsList workshops={workshops} />
            </div>
          </ContentContainer>
        )}
        <ContentContainer>
          <div
            className="grid gap-8 px-4"
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
    </div>
  );
};

export default WorkshopsClient;
