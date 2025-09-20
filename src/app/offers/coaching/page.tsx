"use client";

import { useTranslations } from "next-intl";
import {
  CoachingSection,
  ContentContainer,
  HeaderSpacer,
  InfoCard,
} from "@components/custom";
import LifeCoachingImage from "/public/images/session-1.webp";
import RelationshipCoachingImage from "/public/images/session-2.webp";

const Coaching = () => {
  const t = useTranslations();

  return (
    <div>
      <HeaderSpacer />
      <CoachingSection
        title={t("offers.coaching.life.title")}
        subtitle={t("offers.coaching.life.subtitle")}
        descriptionKey="offers.coaching.life.description"
        image={LifeCoachingImage}
      />
      <CoachingSection
        title={t("offers.coaching.relationship.title")}
        subtitle={t("offers.coaching.relationship.subtitle")}
        descriptionKey="offers.coaching.relationship.description"
        image={RelationshipCoachingImage}
        reverse
        bgColor="bg-orange-100"
        topPolygon
        bottomPolygon
      />
      <ContentContainer>
        <div className="px-2 py-8 md:px-4 md:py-16">
          <div className="mx-auto max-w-4xl space-y-8 md:space-y-12">
            <InfoCard
              titleKey="offers.coaching.placeForYou.title"
              descriptionKey="offers.coaching.placeForYou.description"
            />
            <InfoCard
              titleKey="offers.coaching.format.title"
              descriptionKey="offers.coaching.format.description"
            />
          </div>
        </div>
      </ContentContainer>
    </div>
  );
};

export default Coaching;
