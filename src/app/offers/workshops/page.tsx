import { getTranslations } from "next-intl/server";
import { getWorkshops } from "@utils/db/client";
import WorkshopsClient from "./clientPage";

export async function generateMetadata() {
  const t = await getTranslations();

  return {
    title: t("meta.pages.workshops.title"),
    description: t("meta.pages.workshops.description"),
    openGraph: {
      title: t("meta.pages.workshops.title"),
      description: t("meta.pages.workshops.description"),
    },
  };
}

const Workshops = async () => {
  const { data: workshops } = await getWorkshops();

  return <WorkshopsClient workshops={workshops || []} />;
};

export default Workshops;
