import { useTranslations } from "next-intl";
import { HomeSections } from "@components/custom";

const Home = () => {
  const t = useTranslations();

  return (
    <div>
      <p className="font-rwd flex h-[calc(100vh_-_136px)] items-center p-14 pb-[176px] text-center xl:h-[calc(100vh_-_176px)]">
        {t("home.shortDescription")}
      </p>
      <HomeSections />
    </div>
  );
};

export default Home;
