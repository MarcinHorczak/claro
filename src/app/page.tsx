import { useTranslations } from "next-intl";
import { HomeSections } from "@components/custom";

const Home = () => {
  const t = useTranslations();

  return (
    <div>
      <div className="flex h-screen items-center p-14">
        <p className="font-rwd text-center">
          {t.rich("home.shortDescription", {
            title: (chunks) => <b>{chunks}</b>,
          })}
        </p>
      </div>
      <HomeSections />
    </div>
  );
};

export default Home;
