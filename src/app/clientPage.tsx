"use client";

import { useTranslations } from "next-intl";
import {
  ContentContainer,
  HomeSections,
  PageContainer,
} from "@components/custom";
import { Heading, Text } from "@components/ui";

export const HomeClient = () => {
  const t = useTranslations();

  return (
    <PageContainer noTopPadding noBottomPadding>
      <ContentContainer>
        <div className="px-4 py-16 md:px-14 md:py-32 md:text-center">
          {t.rich("home.shortDescription", {
            h1: (chunks) => (
              <Heading className="mb-4 tracking-widest">{chunks}</Heading>
            ),
            p: (chunks) => <Text variant="large">{chunks}</Text>,
          })}
        </div>
      </ContentContainer>
      <HomeSections />
    </PageContainer>
  );
};
