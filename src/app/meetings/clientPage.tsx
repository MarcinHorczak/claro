"use client";

import { useTranslations } from "next-intl";
import {
  ContentContainer,
  MarkdownPreview,
  MeetingsList,
  PageContainer,
} from "@components/custom";
import { Heading } from "@components/ui";
import { MeetingCategory } from "@utils";
import { PolygonVariant } from "@utils/enums";

type MeetingsClientProps = {
  meetingCategories: MeetingCategory[];
};

export const MeetingsClient = ({ meetingCategories }: MeetingsClientProps) => {
  const t = useTranslations();

  return (
    <PageContainer noBottomPadding>
      <div className="flex flex-col gap-16">
        <ContentContainer>
          <div className="flex flex-col gap-3 px-4 md:text-center">
            <div className="flex flex-col gap-1">
              <Heading>{t("offers.meetings.title")}</Heading>
              <i className="text-primary">{t("offers.meetings.subtitle")}</i>
            </div>
            <p className="text-md whitespace-pre-wrap text-muted-foreground">
              {t("offers.meetings.description")}
            </p>
          </div>
        </ContentContainer>

        {meetingCategories.map((category, index) => (
          <ContentContainer
            key={category.id}
            bgColor={index % 2 === 0 ? "bg-orange-100" : "bg-blue-50"}
            polygonVariants={
              index === meetingCategories.length - 1
                ? [PolygonVariant.TopLeft]
                : index % 2 === 0
                  ? [PolygonVariant.BottomRight, PolygonVariant.TopLeft]
                  : [PolygonVariant.TopLeft, PolygonVariant.BottomRight]
            }
          >
            <div key={category.id} className={index > 0 ? "mt-16" : ""}>
              <div className="px-4 py-16">
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-1">
                    <Heading variant="h3">{category.name}</Heading>
                    <i className="text-primary">{category.location}</i>
                  </div>
                  <MarkdownPreview content={category.description} />
                  <div className="pt-3">
                    <MeetingsList meetings={category.meetings || []} />
                  </div>
                </div>
              </div>
            </div>
          </ContentContainer>
        ))}
      </div>
    </PageContainer>
  );
};
