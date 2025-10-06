import { getTranslations } from "next-intl/server";
import { EndpointName, Workshop, getData } from "@utils";
import WorkshopsClient from "./clientPage";

export async function generateMetadata() {
  const t = await getTranslations();

  return {
    title: t("meta.pages.workshops.title"),
    description: t("meta.pages.workshops.description"),
  };
}

const Workshops = async () => {
  const workshops = await getData<Workshop>(
    EndpointName.Workshops,
    "populate=image",
  );

  return <WorkshopsClient workshops={workshops || []} />;
};

export default Workshops;
