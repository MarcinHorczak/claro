import { ClaroLetters } from "./ClaroLetters";

export const TextBlock = ({
  title,
  description,
  sectionIndex,
}: {
  title: string;
  description: string;
  sectionIndex: number;
}) => (
  <div className="flex flex-col gap-3">
    <ClaroLetters letterIndex={sectionIndex} />
    <p className="font-header w-full font-bold text-primary">{title}</p>
    <p className="font-rwd w-full text-justify">{description}</p>
  </div>
);
