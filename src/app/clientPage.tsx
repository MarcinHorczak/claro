"use client";

import { useTranslations } from "next-intl";
import {
  ContentContainer,
  HeaderSpacer,
  HomeSections,
} from "@components/custom";

export const HomeClient = () => {
  const t = useTranslations();

  return (
    <div>
      <HeaderSpacer />
      <ContentContainer>
        <div className="px-4 py-16 md:px-14 md:py-32 md:text-center">
          {t.rich("home.shortDescription", {
            h1: (chunks) => (
              <h1 className="font-header mb-4 text-3xl font-bold tracking-widest text-primary">
                {chunks}
              </h1>
            ),
            p: (chunks) => <p className="font-normal md:text-lg">{chunks}</p>,
          })}
        </div>
      </ContentContainer>
      <HomeSections />
    </div>
  );
};
