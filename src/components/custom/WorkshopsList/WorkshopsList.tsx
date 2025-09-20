"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ScrollArea } from "@components/ui";
import { Workshop } from "@utils/db/client/workshops/workshops.types";
import { Paths } from "@utils/paths";
import { DateRangeBadge } from "../DateRangeBadge";

enum ScrollDirection {
  LEFT = "left",
  RIGHT = "right",
}

const ITEM_WIDTH = 340;
const ITEM_GAP = 6;

type WorkshopsListProps = {
  workshops: Workshop[];
};

export const WorkshopsList = ({ workshops }: WorkshopsListProps) => {
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const router = useRouter();

  const checkScrollability = () => {
    const scrollContainer = scrollAreaRef.current?.querySelector(
      "[data-radix-scroll-area-viewport]",
    );
    if (scrollContainer) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollAreaRef.current?.querySelector(
      "[data-radix-scroll-area-viewport]",
    );
    if (scrollContainer) {
      checkScrollability();
      scrollContainer.addEventListener("scroll", checkScrollability);
      return () =>
        scrollContainer.removeEventListener("scroll", checkScrollability);
    }
  }, [workshops]);

  const scroll = (direction: ScrollDirection) => {
    const scrollContainer = scrollAreaRef.current?.querySelector(
      "[data-radix-scroll-area-viewport]",
    );
    if (scrollContainer) {
      const scrollAmount = ITEM_WIDTH + ITEM_GAP * 4;
      const currentScroll = scrollContainer.scrollLeft;
      const targetScroll =
        direction === ScrollDirection.LEFT
          ? currentScroll - scrollAmount
          : currentScroll + scrollAmount;

      scrollContainer.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  const handleWorkshopClick = (workshopKey: string) => {
    router.push(Paths.Workshops + "/" + workshopKey);
  };

  return (
    <div className="relative w-full">
      <div
        className={`absolute left-0 top-0 z-10 h-full w-24 transition-all duration-500 ease-out ${
          canScrollLeft
            ? "bg-gradient-to-r from-white via-white/70 to-transparent opacity-100"
            : "hidden"
        }`}
      />
      <div
        className={`absolute right-0 top-0 z-10 h-full w-24 transition-all duration-500 ease-out ${
          canScrollRight
            ? "bg-gradient-to-l from-white via-white/70 to-transparent opacity-100"
            : "hidden"
        }`}
      />

      <button
        onClick={() => scroll(ScrollDirection.LEFT)}
        className={`group absolute left-2 top-1/2 z-40 -translate-y-1/2 rounded-full border border-gray-200/60 bg-white/95 p-3 shadow-lg backdrop-blur-md transition-all duration-300 ease-out hover:border-gray-300/80 hover:bg-white hover:shadow-xl ${
          canScrollLeft
            ? "translate-x-0 opacity-100"
            : "-translate-x-4 opacity-0"
        }`}
      >
        <ChevronLeft className="h-5 w-5 text-gray-700 transition-all duration-200 group-hover:scale-110 group-hover:text-gray-900 group-active:scale-95" />
      </button>
      <button
        onClick={() => scroll(ScrollDirection.RIGHT)}
        className={`group absolute right-2 top-1/2 z-40 -translate-y-1/2 rounded-full border border-gray-200/60 bg-white/95 p-3 shadow-lg backdrop-blur-md transition-all duration-300 ease-out hover:border-gray-300/80 hover:bg-white hover:shadow-xl ${
          canScrollRight
            ? "translate-x-0 opacity-100"
            : "translate-x-4 opacity-0"
        }`}
      >
        <ChevronRight className="h-5 w-5 text-gray-700 transition-all duration-200 group-hover:scale-110 group-hover:text-gray-900 group-active:scale-95" />
      </button>

      <ScrollArea className="w-full" ref={scrollAreaRef}>
        <div className="flex gap-6 px-4">
          {workshops.map((workshop) => (
            <button
              key={workshop.id}
              onClick={() => handleWorkshopClick(workshop.key)}
              className="group min-w-[340px] max-w-[340px] text-left"
            >
              <div className="overflow-hidden rounded-xl shadow-md">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={workshop.image_url}
                    alt={workshop.name}
                    sizes="max-width: 340px"
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
                <div className="bg-white p-6">
                  <h3 className="mb-3 line-clamp-2 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-primary">
                    {workshop.name}
                  </h3>
                  <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-gray-600">
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
      </ScrollArea>
    </div>
  );
};
