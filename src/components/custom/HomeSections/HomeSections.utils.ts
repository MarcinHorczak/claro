import { PolygonVariant } from "@utils/enums";

export const useHomeSections = () => {
  return [
    {
      sectionIndex: 0,
      imageClass: "bg-[url(/home/bible.webp)]",
      sectionId: "c",
      textContent: {
        titleKey: "home.c.title",
        descriptionKey: "home.c.description",
      },
      polygonVariants: [PolygonVariant.TopLeft, PolygonVariant.BottomRight],
    },
    {
      sectionIndex: 1,
      imageClass: "bg-[url(/home/grow.webp)]",
      sectionId: "l",
      textContent: {
        titleKey: "home.l.title",
        descriptionKey: "home.l.description",
      },
    },
    {
      sectionIndex: 2,
      imageClass: "bg-[url(/home/active.webp)]",
      sectionId: "a",
      textContent: {
        titleKey: "home.a.title",
        descriptionKey: "home.a.description",
      },
      polygonVariants: [PolygonVariant.TopRight, PolygonVariant.BottomLeft],
    },
    {
      sectionIndex: 3,
      imageClass: "bg-[url(/home/deep.webp)]",
      sectionId: "r",
      textContent: {
        titleKey: "home.r.title",
        descriptionKey: "home.r.description",
      },
    },
    {
      sectionIndex: 4,
      imageClass: "bg-[url(/home/hands.webp)]",
      sectionId: "o",
      textContent: {
        titleKey: "home.o.title",
        descriptionKey: "home.o.description",
      },
      polygonVariants: [PolygonVariant.TopLeft],
    },
  ];
};
