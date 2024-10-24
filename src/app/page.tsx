import { useTranslations } from "next-intl";
import { HomeSections } from "@components/custom";

const Home = () => {
  const t = useTranslations();

  return (
    <div className="md:px-32 xl:px-64">
      <div className="flex h-screen items-center p-14">
        <h1 className="font-header text-center font-normal">
          {t.rich("home.shortDescription", {
            b: (chunks) => (
              <span className="font-serif tracking-widest text-primary">
                {chunks}
              </span>
            ),
          })}
        </h1>
      </div>
      <HomeSections />
    </div>
  );
};

export default Home;
