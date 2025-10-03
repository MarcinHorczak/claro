import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { getWorkshop } from "@utils/db/client";
import { WorkshopClient } from "./clientPage";

type WorkshopParams = {
  params: {
    workshop: string;
  };
};

export const generateMetadata = async ({ params }: WorkshopParams) => {
  const { data: workshop } = await getWorkshop(params.workshop);

  const t = await getTranslations();

  return {
    ...(workshop?.name && { title: workshop.name }),
    description: t("meta.pages.workshops.description"),
    images: [workshop?.image_url],
  };
};

const Workshop = async ({ params }: WorkshopParams) => {
  const { data: workshop } = await getWorkshop(params.workshop);

  if (!workshop) {
    notFound();
  }

  return <WorkshopClient workshop={workshop} />;
};

export default Workshop;
