import { getTranslations } from "next-intl/server";
import { CoachingClient } from "./clientPage";
import LifeCoachingImage from "/public/images/session-1.webp";
import RelationshipCoachingImage from "/public/images/session-2.webp";

export const generateMetadata = async () => {
  const t = await getTranslations();

  return {
    title: t("meta.pages.coaching.title"),
    description: t("meta.pages.coaching.description"),
    openGraph: {
      title: t("meta.pages.coaching.title"),
      description: t("meta.pages.coaching.description"),
      images: [
        {
          url: LifeCoachingImage.src,
          width: 800,
          height: 600,
          alt: t("images.alt.lifeCoaching"),
        },
        {
          url: RelationshipCoachingImage.src,
          width: 800,
          height: 600,
          alt: t("images.alt.relationshipCoaching"),
        },
      ],
    },
  };
};

const Coaching = () => {
  return <CoachingClient />;
};

export default Coaching;
