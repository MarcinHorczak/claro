import { useTranslations } from "next-intl";
import { Paths } from "@/shared/paths";

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
    {
      name: t("navigation.prices"),
      href: Paths.Prices,
    },
    {
      name: t("navigation.contact"),
      href: Paths.Contact,
    },
  ];
};
