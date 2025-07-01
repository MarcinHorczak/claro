import { useTranslations } from "next-intl";

export const useHomeSections = () => {
  const t = useTranslations();

  return [
    {
      sectionIndex: 0,
      imageClass: "bg-[url(/home/bible.webp)]",
      sectionId: "c",
      textContent: {
        title: t("home.c.title"),
        description: t("home.c.description"),
      },
    },
    {
      sectionIndex: 1,
      imageClass: "bg-[url(/home/grow.webp)]",
      sectionId: "l",
      textContent: {
        title: t("home.l.title"),
        description: t("home.l.description"),
      },
    },
    {
      sectionIndex: 2,
      imageClass: "bg-[url(/home/active.webp)]",
      sectionId: "a",
      textContent: {
        title: t("home.a.title"),
        description: t("home.a.description"),
      },
    },
    {
      sectionIndex: 3,
      imageClass: "bg-[url(/home/deep.webp)]",
      sectionId: "r",
      textContent: {
        title: t("home.r.title"),
        description: t("home.r.description"),
      },
    },
    {
      sectionIndex: 4,
      imageClass: "bg-[url(/home/hands.webp)]",
      sectionId: "o",
      textContent: {
        title: t("home.o.title"),
        description: t("home.o.description"),
      },
    },
  ];
};
