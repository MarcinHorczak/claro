"use client";

import { useBreakpoint } from "@utils";
import { TextBlock } from "./TextBlock";

interface Text {
  title: string;
  description: string;
}

interface SectionProps {
  textContents: Text[];
  imagePath: string;
  imageAlt: string;
  sectionId: string;
  direction: "left" | "right";
}

export const Section = ({
  textContents,
  imagePath,
  imageAlt,
  sectionId,
  direction,
}: SectionProps) => {
  const isRowDirection = useBreakpoint("md");
  const isLeft = direction === "left";

  const flexDirection = isRowDirection
    ? isLeft
      ? "flex-row"
      : "flex-row-reverse"
    : "flex-col";
  const imageRadius = isRowDirection
    ? isLeft
      ? "rounded-e-[150px]"
      : "rounded-s-[150px]"
    : "";

  return (
    <section
      className={`flex ${flexDirection} items-center gap-5`}
      id={sectionId}
    >
      <div
        className={`flex h-screen flex-[2] ${isLeft ? "justify-start" : "justify-end"}`}
      >
        <img
          src={imagePath}
          alt={imageAlt}
          className={`h-full w-full object-cover shadow-2xl ${imageRadius}`}
        />
      </div>
      <div className="flex flex-[3] flex-col gap-10 p-14">
        {textContents.map((textContent, index) => (
          <TextBlock key={index} textAlignment={direction} {...textContent} />
        ))}
      </div>
    </section>
  );
};
