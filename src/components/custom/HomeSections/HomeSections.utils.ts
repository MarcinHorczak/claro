import { useTranslations } from "next-intl";

type Direction = "left" | "right";

export const useHomeSections = () => {
  const t = useTranslations();

  return [
    {
      imagePath: "/home/bible.webp",
      imageAlt: "Bible",
      sectionId: "cl",
      direction: "left" as Direction,
      textContents: [
        {
          title: t("home.c.title"),
          description: t("home.c.description"),
        },
        {
          title: t("home.l.title"),
          description: t("home.l.description"),
        },
      ],
    },
    {
      imagePath: "/home/active.webp",
      imageAlt: "Active",
      sectionId: "ar",
      direction: "right" as Direction,
      textContents: [
        {
          title: t("home.a.title"),
          description: t("home.a.description"),
        },
        {
          title: t("home.r.title"),
          description: t("home.r.description"),
        },
      ],
    },
    {
      imagePath: "/home/hands.webp",
      imageAlt: "Hands",
      sectionId: "o",
      direction: "left" as Direction,
      textContents: [
        {
          title: t("home.o.title"),
          description: t("home.o.description"),
        },
      ],
    },
  ];
};
