"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { DateRangeBadge } from "@components/custom";
import { Workshop } from "@utils/db/client/workshops/workshops.types";

type CarouselProps = {
  workshops: Workshop[];
  isDesktop: boolean;
  onWorkshopClick: (workshopKey: string) => void;
};

export const Carousel = ({
  workshops,
  isDesktop,
  onWorkshopClick,
}: CarouselProps) => {
  const itemClasses = isDesktop
    ? "min-w-[340px] max-w-[340px] max-h-[380px] min-h-[380px]"
    : "min-w-[280px] max-w-[280px] max-h-[360px] min-h-[360px]";

  const containerHeightClass = isDesktop ? "h-[380px]" : "h-[360px]";

  return (
    <div
      className={`px-1 py-2 ${isDesktop ? "hidden md:block" : "block md:hidden"} ${
        isDesktop ? "w-full" : "w-full overflow-x-auto"
      }`}
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <div className="flex min-w-0 gap-6">
        {workshops.map((workshop) => (
          <button
            key={workshop.id}
            onClick={() => onWorkshopClick(workshop.key)}
            className={`group ${itemClasses} text-left`}
          >
            <div
              className={`flex flex-col overflow-hidden rounded-xl shadow-md ${containerHeightClass}`}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={workshop.image_url}
                  alt={workshop.name}
                  sizes={`max-width: ${isDesktop ? 340 : 280}px`}
                  fill
                  className="object-cover saturate-50 transition-all duration-500 group-hover:scale-105 group-hover:saturate-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <DateRangeBadge
                    startDate={workshop.start_date}
                    endDate={workshop.end_date}
                  />
                </div>
              </div>

              <div className="flex flex-1 flex-col bg-white p-6">
                <h3 className="mb-3 line-clamp-2 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-primary">
                  {workshop.name}
                </h3>
                <p className="mb-4 line-clamp-3 flex-1 text-sm leading-relaxed text-gray-600">
                  {workshop.short_description}
                </p>
                <div className="flex items-center justify-end">
                  <ArrowRight className="h-4 w-4 text-primary" />
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
