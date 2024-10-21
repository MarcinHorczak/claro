import { ReactNode } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface HomeSectionProps {
  textContent: ReactNode;
  imagePath: string;
  imageAlt: string;
  direction?: "left" | "right";
}

const HomeSection = ({
  textContent,
  imagePath,
  imageAlt,
  direction = "right",
}: HomeSectionProps) => {
  const isLeft = direction === "left";

  return (
    <div
      className={`flex ${isLeft ? "flex-row" : "flex-row-reverse"} items-center gap-5 py-5`}
    >
      <div
        className={`flex flex-1 ${isLeft ? "justify-start" : "justify-end"}`}
      >
        <Image
          src={imagePath}
          alt={imageAlt}
          width={300}
          height={300}
          className={`${isLeft ? "rounded-e-3xl" : "rounded-s-3xl"}`}
        />
      </div>
      <div className={`flex-1 p-10 ${isLeft ? "text-right" : "text-left"}`}>
        {textContent}
      </div>
    </div>
  );
};

const Home = () => {
  const t = useTranslations();

  return (
    <div>
      <p className="p-20 text-center">{t("home.shortDescription")}</p>
      <div>
        <HomeSection
          imagePath="/home/bible.webp"
          imageAlt="Bible"
          textContent={
            <>
              <p className="font-bold">{t("home.c.title")}</p>
              <p>{t("home.c.description")}</p>

              <p className="font-bold">{t("home.l.title")}</p>
              <p>{t("home.l.description")}</p>
            </>
          }
        />
        <HomeSection
          imagePath="/home/active.webp"
          imageAlt="Active"
          textContent={
            <>
              <p className="font-bold">{t("home.a.title")}</p>
              <p>{t("home.a.description")}</p>

              <p className="font-bold">{t("home.r.title")}</p>
              <p>{t("home.r.description")}</p>
            </>
          }
          direction="left"
        />
        <HomeSection
          imagePath="/home/hands.webp"
          imageAlt="Hands"
          textContent={
            <>
              <p className="font-bold">{t("home.o.title")}</p>
              <p>{t("home.o.description")}</p>
            </>
          }
        />
      </div>
    </div>
  );
};

export default Home;
