"use client";

import { ArrowRight, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Badge } from "@components/ui";
import { Meeting } from "@utils";
import { Paths } from "@utils/paths";

type MeetingsListProps = {
  meetings: Meeting[];
};

export const MeetingsList = ({ meetings }: MeetingsListProps) => {
  const router = useRouter();

  const handleMeetingClick = (meetingKey: string) => {
    router.push(`${Paths.Meetings}/${meetingKey}`);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pl-PL", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const formatTimeRange = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const startTime = start.toLocaleTimeString("pl-PL", {
      hour: "2-digit",
      minute: "2-digit",
    });

    const endTime = end.toLocaleTimeString("pl-PL", {
      hour: "2-digit",
      minute: "2-digit",
    });

    return `${startTime} - ${endTime}`;
  };

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {meetings.map((meeting) => (
        <button
          key={meeting.id}
          onClick={() => handleMeetingClick(meeting.key)}
          className="group text-left"
        >
          <div className="flex h-full flex-col overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-lg">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={meeting.image.formats.small.url}
                alt={meeting.name}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                fill
                className="object-cover saturate-50 transition-all duration-500 group-hover:scale-105 group-hover:saturate-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 flex gap-2">
                <Badge
                  variant="secondary"
                  className="w-fit bg-white/90 text-gray-800"
                >
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span className="text-xs font-medium">
                      {formatDate(meeting.startDate)}
                    </span>
                  </div>
                </Badge>
                <Badge
                  variant="secondary"
                  className="w-fit bg-white/90 text-gray-800"
                >
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span className="text-xs font-medium">
                      {formatTimeRange(meeting.startDate, meeting.endDate)}
                    </span>
                  </div>
                </Badge>
              </div>
            </div>

            <div className="flex flex-1 flex-col bg-white p-6">
              <h3 className="mb-3 line-clamp-2 text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-primary">
                {meeting.name}
              </h3>
              <p className="mb-4 line-clamp-3 flex-1 text-sm leading-relaxed text-gray-600">
                {meeting.shortDescription}
              </p>
              <div className="flex items-center justify-end">
                <ArrowRight className="h-4 w-4 text-primary" />
              </div>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};
