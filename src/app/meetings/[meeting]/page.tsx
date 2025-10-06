import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import {
  EndpointName,
  MeetingCategory,
  Meeting as MeetingType,
  getData,
} from "@utils";
import { MeetingClient } from "./clientPage";

type MeetingParams = {
  params: { meeting: string };
};

export const generateMetadata = async ({ params }: MeetingParams) => {
  const meetings = await getData<MeetingType>(
    EndpointName.Meetings,
    "populate=image",
  );

  const meeting = meetings?.find((meeting) => meeting.key === params.meeting);

  if (!meeting) {
    notFound();
  }

  const t = await getTranslations();

  return {
    title: meeting?.name || t("meta.pages.meetings.title"),
    description: meeting?.description || t("meta.pages.meetings.description"),
    images: [meeting?.image.formats.small.url],
  };
};

const Meeting = async ({ params }: MeetingParams) => {
  const meetingCategories = await getData<MeetingCategory>(
    EndpointName.MeetingsCategories,
    "populate[meetings][populate]=image",
  );
  const meetings = await getData<MeetingType>(
    EndpointName.Meetings,
    "populate=image",
  );

  const meetingCategory = meetingCategories?.find((category) =>
    category.meetings?.find((meeting) => meeting.key === params.meeting),
  );

  const meeting = meetings?.find((meeting) => meeting.key === params.meeting);

  if (!meeting) {
    notFound();
  }

  return (
    <MeetingClient meeting={meeting} location={meetingCategory?.location} />
  );
};

export default Meeting;
