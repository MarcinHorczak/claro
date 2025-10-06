import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { EndpointName, Workshop as WorkshopType, getData } from "@utils";
import { WorkshopClient } from "./clientPage";

type WorkshopParams = {
  params: {
    workshop: string;
  };
};

export const generateMetadata = async ({ params }: WorkshopParams) => {
  const workshops = await getData<WorkshopType>(
    EndpointName.Workshops,
    "populate=image",
  );
  const workshop = workshops?.find(
    (workshop) => workshop.key === params.workshop,
  );

  const t = await getTranslations();

  return {
    ...(workshop?.name && { title: workshop.name }),
    description: t("meta.pages.workshops.description"),
    images: [workshop?.image.formats.small.url],
  };
};

const Workshop = async ({ params }: WorkshopParams) => {
  const workshops = await getData<WorkshopType>(
    EndpointName.Workshops,
    "populate=image",
  );
  const workshop = workshops?.find(
    (workshop) => workshop.key === params.workshop,
  );

  if (!workshop) {
    notFound();
  }

  return <WorkshopClient workshop={workshop} />;
};

export default Workshop;
