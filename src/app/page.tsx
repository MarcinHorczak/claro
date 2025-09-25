import { getTranslations } from "next-intl/server";
import { HomeClient } from "./clientPage";

export const generateMetadata = async () => {
  const t = await getTranslations();

  return {
    title: t("meta.pages.home.title"),
    description: t("meta.pages.home.description"),
    openGraph: {
      title: t("meta.pages.home.title"),
      description: t("meta.pages.home.description"),
    },
  };
};

const Home = () => <HomeClient />;

export default Home;
