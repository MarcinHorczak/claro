import { useTranslations } from "next-intl";
import { Paths } from "@utils/paths";

export const useNavigationElements = () => {
  const t = useTranslations();

  return [
    {
      name: t("navigation.home"),
      href: Paths.Home,
    },
    {
      name: t("navigation.about"),
      href: Paths.About,
    },
    {
      name: t("navigation.offers"),
      href: Paths.Offers,
    },
  ];
};
