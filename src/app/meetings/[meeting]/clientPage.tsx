"use client";

import { ArrowLeft, Calendar, Clock, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import {
  ContentContainer,
  MarkdownPreview,
  PageContainer,
} from "@components/custom";
import { Button, Card, CardContent, Heading, Text } from "@components/ui";
import { Meeting } from "@utils";
import { Paths } from "@utils/paths";

interface MeetingClientProps {
  meeting: Meeting;
  location?: string;
}

export const MeetingClient = ({ meeting, location }: MeetingClientProps) => {
  const t = useTranslations();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pl-PL", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("pl-PL", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };
  return (
    <PageContainer>
      <ContentContainer>
        <div className="grid gap-12 px-4 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-8">
            <div className="flex flex-row items-center gap-4">
              <Link href={Paths.Meetings}>
                <ArrowLeft className="text-primary" size={32} />
              </Link>
              <Heading>{meeting.name}</Heading>
            </div>
            <Card>
              <CardContent className="flex flex-col gap-8 px-8 py-6">
                <div className="space-y-4">
                  <MarkdownPreview content={meeting.description} />
                </div>
                <Link
                  href={meeting.registrationLink}
                  target="_blank"
                  className="w-full self-end md:w-auto"
                >
                  <Button className="w-full md:w-auto">
                    {t("offers.meeting.registration")}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col gap-4 lg:col-span-4">
            <div className="overflow-hidden rounded-xl">
              <Image
                src={meeting.image.formats.small.url}
                alt={meeting.name}
                width={400}
                priority
                height={300}
                className="h-auto w-full object-cover"
              />
            </div>

            <Card>
              <CardContent className="space-y-4 p-6">
                <Heading variant="h4" className="text-lg font-semibold">
                  {t("offers.meeting.information")}
                </Heading>

                <div className="space-y-3">
                  {location && (
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <div>
                        <Text variant="label">
                          {t("offers.meeting.location")}
                        </Text>
                        <Text variant="caption-xs">{location}</Text>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-3">
                    <Calendar className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <div>
                      <Text variant="label">{t("offers.meeting.date")}</Text>
                      <Text variant="caption-xs">
                        {formatDate(meeting.startDate)}
                      </Text>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <div>
                      <Text variant="label">{t("offers.meeting.time")}</Text>
                      <Text variant="caption-xs">
                        {formatTime(meeting.startDate)} -{" "}
                        {formatTime(meeting.endDate)}
                      </Text>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </ContentContainer>
    </PageContainer>
  );
};
