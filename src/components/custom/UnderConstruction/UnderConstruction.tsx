import { Hammer } from "lucide-react";
import { useTranslations } from "next-intl";

export const UnderConstruction = () => {
  const t = useTranslations();

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-5">
      <Hammer size={80} strokeWidth={1.5} />
      <p className="font-bold">{t("underConstruction")}</p>
    </div>
  );
};
