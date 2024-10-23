import { useTranslations } from "next-intl";

export const useHomeSections = () => {
  const t = useTranslations();

  return [
    {
      imageClass: "bg-[url(/home/bible.webp)]",
      sectionId: "c",
      textContents: [
        {
          title: t("home.c.title"),
          description: t("home.c.description"),
        },
      ],
    },
    {
      imageClass: "bg-[url(/home/bible.webp)]",
      sectionId: "l",
      textContents: [
        {
          title: t("home.l.title"),
          description: t("home.l.description"),
        },
      ],
    },
    {
      imageClass: "bg-[url(/home/active.webp)]",
      sectionId: "a",
      textContents: [
        {
          title: t("home.a.title"),
          description: t("home.a.description"),
        },
      ],
    },
    {
      imageClass: "bg-[url(/home/active.webp)]",
      sectionId: "r",
      textContents: [
        {
          title: t("home.r.title"),
          description: t("home.r.description"),
        },
      ],
    },
    {
      imageClass: "bg-[url(/home/hands.webp)]",
      sectionId: "o",
      textContents: [
        {
          title: t("home.o.title"),
          description: t("home.o.description"),
        },
      ],
    },
  ];
};
