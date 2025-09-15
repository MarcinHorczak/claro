import { useTranslations } from "next-intl";
import { Paths } from "@utils/paths";
import { NavigationElementProps } from "./Navigation.types";

export const useNavigationElements = (): NavigationElementProps[] => {
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
      name: t("navigation.offers.title"),
      options: [
        {
          name: t("navigation.offers.coaching"),
          href: Paths.Coaching,
        },
        {
          name: t("navigation.offers.workshops"),
          href: Paths.Workshops,
        },
      ],
    },
  ];
};
