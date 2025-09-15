import { useTranslations } from "next-intl";
import { ContentContainer, HomeSections } from "@components/custom";

const Home = () => {
  const t = useTranslations();

  return (
    <ContentContainer>
      <div className="flex h-screen items-center p-14">
        <h1 className="font-header text-center font-normal">
          {t.rich("home.shortDescription", {
            b: (chunks) => (
              <span className="tracking-widest text-primary">{chunks}</span>
            ),
          })}
        </h1>
      </div>
      <HomeSections />
    </ContentContainer>
  );
};

export default Home;
