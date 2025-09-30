import { useTranslations } from "next-intl";
import { Heading, Text } from "@components/ui";
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
    <div className="space-y-4">
      <ClaroLetters letterIndex={sectionIndex} />
      <Heading>{t(titleKey)}</Heading>
      <div className="space-y-4">
        {t.rich(descriptionKey, {
          p: (chunks) => <Text>{chunks}</Text>,
        })}
      </div>
      <div className="pt-4">
        <div className="h-1 w-20 rounded-full bg-gradient-to-r from-primary to-orange-300" />
      </div>
    </div>
  );
};
