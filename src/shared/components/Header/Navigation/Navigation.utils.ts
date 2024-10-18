import { Paths } from "@/shared/paths";

export const useNavigationElements = () => {
  return [
    {
      name: "Home",
      href: Paths.Home,
    },
    {
      name: "About",
      href: Paths.About,
    },
    {
      name: "Offers",
      href: Paths.Offers,
    },
    {
      name: "Prices",
      href: Paths.Prices,
    },
    {
      name: "Contact",
      href: Paths.Contact,
    },
  ];
};
