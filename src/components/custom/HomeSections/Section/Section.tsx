"use client";

import { useBreakpoint } from "@utils";
import { TextBlock } from "./TextBlock";

interface Text {
  title: string;
  description: string;
  letterIndex: number;
}

interface SectionProps {
  textContent: Text;
  imageClass: string;
  sectionId: string;
}

export const Section = ({
  textContent,
  imageClass,
  sectionId,
}: SectionProps) => {
  const isDesktop = useBreakpoint("md");
  const rwdBackground = isDesktop
    ? "bg-cover bg-center"
    : "bg-[length:auto_100svh] bg-[center_top]";

  return (
    <section className="flex w-full flex-col items-center gap-5" id={sectionId}>
      <div
        className={`h-full w-full ${rwdBackground} ${imageClass} bg-fixed bg-no-repeat`}
      >
        <div className="flex items-end pt-[50svh]">
          <div className="flex flex-[3] flex-col justify-center gap-10 bg-white px-6 py-20 xl:p-32">
            <TextBlock {...textContent} />
          </div>
        </div>
      </div>
    </section>
  );
};
