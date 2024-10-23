import { useTranslations } from "next-intl";
import { HomeSections } from "@components/custom";

const Home = () => {
  const t = useTranslations();

  return (
    <div>
      <div className="flex h-screen items-center p-14 md:px-32 xl:px-64">
        <p className="font-header text-center font-normal">
          {t.rich("home.shortDescription", {
            b: (chunks) => (
              <b className="tracking-widest text-primary">{chunks}</b>
            ),
          })}
        </p>
      </div>
      <div className="md:px-32 xl:px-64">
        <HomeSections />
      </div>
    </div>
  );
};

export default Home;
