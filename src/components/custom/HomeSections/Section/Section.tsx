import { TextBlock } from "./TextBlock";

interface Text {
  title: string;
  description: string;
}

interface SectionProps {
  textContents: Text[];
  imageClass: string;
  sectionId: string;
}

export const Section = ({
  textContents,
  imageClass,
  sectionId,
}: SectionProps) => (
  <section className="flex w-full flex-col items-center gap-5" id={sectionId}>
    <div
      className={`h-full w-full ${imageClass} bg-cover bg-fixed bg-center bg-no-repeat`}
    >
      <div className="flex items-end pt-[50vh]">
        <div className="flex flex-[3] flex-col justify-center gap-10 bg-white px-6 py-20 xl:p-32">
          {textContents.map((textContent, index) => (
            <TextBlock key={index} {...textContent} />
          ))}
        </div>
      </div>
      <div className="custom-shape-divider-top"></div>
    </div>
  </section>
);
