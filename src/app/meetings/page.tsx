import { getTranslations } from "next-intl/server";
import { EndpointName, MeetingCategory, getData } from "@utils";
import { MeetingsClient } from "./clientPage";

export async function generateMetadata() {
  const t = await getTranslations();

  return {
    title: t("meta.pages.meetings.title"),
    description: t("meta.pages.meetings.description"),
  };
}

const Meetings = async () => {
  const meetingCategories = await getData<MeetingCategory>(
    EndpointName.MeetingsCategories,
    "populate[meetings][populate]=image",
  );

  const categoriesWithSortedMeetings = meetingCategories?.map((category) => ({
    ...category,
    meetings: category.meetings?.sort((a, b) => {
      return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
    }),
  }));

  return (
    <MeetingsClient meetingCategories={categoriesWithSortedMeetings || []} />
  );
};

export default Meetings;
