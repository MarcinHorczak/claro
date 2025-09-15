import { useTranslations } from "next-intl";
import { ClaroLetters } from "./ClaroLetters";

export const TextBlock = ({
  titleKey,
  descriptionKey,
  sectionIndex,
}: {
  titleKey: string;
  descriptionKey: string;
  sectionIndex: number;
}) => {
  const t = useTranslations();

  return (
    <div className="flex flex-col gap-3">
      <ClaroLetters letterIndex={sectionIndex} />
      <p className="font-header w-full font-bold text-primary">{t(titleKey)}</p>
      {t.rich(descriptionKey, {
        p: (chunks) => <p className="font-rwd w-full text-justify">{chunks}</p>,
      })}
    </div>
  );
};
