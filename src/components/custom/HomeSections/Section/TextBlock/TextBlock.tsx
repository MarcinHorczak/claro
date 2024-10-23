import { ClaroLetters } from "./ClaroLetters";

export const TextBlock = ({
  title,
  description,
  letterIndex,
}: {
  title: string;
  description: string;
  letterIndex: number;
}) => (
  <div className="flex flex-col gap-3">
    <ClaroLetters letterIndex={letterIndex} />
    <p className="font-header w-full font-bold text-primary">{title}</p>
    <p className="font-rwd w-full">{description}</p>
  </div>
);
