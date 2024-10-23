import { useTranslations } from "next-intl";

export const useHomeSections = () => {
  const t = useTranslations();

  return [
    {
      imageClass: "bg-[url(/home/bible.webp)]",
      sectionId: "c",
      textContent: {
        letterIndex: 0,
        title: t("home.c.title"),
        description: t("home.c.description"),
      },
    },
    {
      imageClass: "bg-[url(/home/bible.webp)]",
      sectionId: "l",
      textContent: {
        letterIndex: 1,
        title: t("home.l.title"),
        description: t("home.l.description"),
      },
    },
    {
      imageClass: "bg-[url(/home/active.webp)]",
      sectionId: "a",
      textContent: {
        letterIndex: 2,
        title: t("home.a.title"),
        description: t("home.a.description"),
      },
    },
    {
      imageClass: "bg-[url(/home/active.webp)]",
      sectionId: "r",
      textContent: {
        letterIndex: 3,
        title: t("home.r.title"),
        description: t("home.r.description"),
      },
    },
    {
      imageClass: "bg-[url(/home/hands.webp)]",
      sectionId: "o",
      textContent: {
        letterIndex: 4,
        title: t("home.o.title"),
        description: t("home.o.description"),
      },
    },
  ];
};
