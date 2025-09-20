"use client";

import { ContentContainer } from "@components/custom/ContentContainer";
import { useBreakpoint } from "@utils";
import { PolygonVariant } from "@utils/enums";
import { TextBlock } from "./TextBlock";

interface Text {
  titleKey: string;
  descriptionKey: string;
}

interface SectionProps {
  sectionIndex: number;
  textContent: Text;
  imageClass: string;
  sectionId: string;
  polygonVariants?: PolygonVariant[];
}

export const Section = ({
  textContent,
  imageClass,
  sectionId,
  sectionIndex,
  polygonVariants,
}: SectionProps) => {
  const isDesktop = useBreakpoint("lg");

  return (
    <ContentContainer
      bgColor={sectionIndex % 2 === 0 ? "bg-orange-100" : "bg-white"}
      polygonHeight={16}
      polygonVariants={
        isDesktop && polygonVariants && polygonVariants.length > 0
          ? polygonVariants
          : undefined
      }
    >
      <section
        className="flex w-full flex-col md:flex-row md:items-center"
        id={sectionId}
      >
        <div className="md:hidden">
          <div
            className={`h-full w-full bg-cover bg-fixed bg-center bg-no-repeat ${imageClass}`}
          >
            <div className="flex items-end pt-[50svh]">
              <div className="flex flex-[3] flex-col justify-center gap-10 bg-white px-6 py-20">
                <TextBlock sectionIndex={sectionIndex} {...textContent} />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex md:flex-1 md:items-center md:gap-5">
          <div className="flex-1 px-14 py-52">
            <TextBlock sectionIndex={sectionIndex} {...textContent} />
          </div>
          <div
            className={`h-96 flex-1 overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat lg:h-[500px] lg:rounded-3xl ${imageClass}`}
          />
        </div>
      </section>
    </ContentContainer>
  );
};
