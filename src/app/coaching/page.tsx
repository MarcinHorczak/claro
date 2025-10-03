import { getTranslations } from "next-intl/server";
import { CoachingClient } from "./clientPage";

export const generateMetadata = async () => {
  const t = await getTranslations();

  return {
    title: t("meta.pages.coaching.title"),
    description: t("meta.pages.coaching.description"),
  };
};

const Coaching = () => {
  return <CoachingClient />;
};

export default Coaching;
