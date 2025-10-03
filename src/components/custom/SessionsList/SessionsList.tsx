"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Session } from "@utils/db/client";
import { Paths } from "@utils/paths";

type SessionsListProps = {
  sessions: Session[];
};

export const SessionsList = ({ sessions }: SessionsListProps) => {
  const router = useRouter();

  const handleSessionClick = (sessionKey: string) => {
    router.push(`${Paths.Sessions}/${sessionKey}`);
  };

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {sessions.map((session) => (
        <button
          key={session.id}
          onClick={() => handleSessionClick(session.key)}
          className="group text-left"
        >
          <div className="flex h-full flex-col overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-lg">
            <div className="relative h-48 overflow-hidden">
              <Image
                src={session.image_url}
                alt={session.name}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                fill
                className="object-cover saturate-50 transition-all duration-500 group-hover:scale-105 group-hover:saturate-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            <div className="flex flex-1 flex-col bg-white p-6">
              <h3 className="mb-3 line-clamp-2 text-lg font-bold text-gray-900 transition-colors duration-300 group-hover:text-primary">
                {session.name}
              </h3>
              <p className="mb-4 line-clamp-3 flex-1 text-sm leading-relaxed text-gray-600">
                {session.short_description}
              </p>
              <div className="flex items-center justify-end">
                <ArrowRight className="h-4 w-4 text-primary transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};
