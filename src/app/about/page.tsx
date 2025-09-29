import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { ContentContainer, HeaderSpacer } from "@components/custom";
import AboutImage from "/public/images/ula.webp";

export async function generateMetadata() {
  const t = await getTranslations();

  return {
    title: t("meta.pages.about.title"),
    description: t("meta.pages.about.description"),
  };
}

const About = () => {
  const t = useTranslations();

  const imageStyle = { backgroundImage: `url(${AboutImage.src})` };
  const imageClasses = "bg-cover bg-top bg-no-repeat shadow-2xl";

  return (
    <ContentContainer>
      <HeaderSpacer />
      <div className="flex w-full justify-center pb-20 pt-12 md:pb-32 md:pt-16 xl:pt-24">
        <div className="max-w-[1170px] px-6 md:px-10">
          <div className="flex flex-col gap-8 md:hidden">
            <div className="flex justify-center">
              <div
                className={`h-80 w-80 rounded-full ${imageClasses}`}
                style={imageStyle}
                role="img"
                aria-label={t("about.name")}
              />
            </div>
            <div className="space-y-6">
              <h1 className="mb-6 text-center text-2xl font-bold text-primary">
                {t("about.name")}
              </h1>
              {t.rich("about.description", {
                p: (chunks) => (
                  <p className="text-base leading-relaxed">{chunks}</p>
                ),
              })}
            </div>
          </div>

          <div className="hidden md:flex md:items-start md:gap-8">
            <div className="flex flex-shrink-0 items-center justify-center px-8">
              <div
                className={`h-[500px] w-[400px] rounded-3xl ${imageClasses}`}
                style={imageStyle}
                role="img"
                aria-label={t("about.name")}
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-primary">
                {t("about.name")}
              </h1>
              <div className="flex-1 space-y-6 py-8">
                {t.rich("about.description", {
                  p: (chunks) => (
                    <p className="text-justify indent-8 text-lg leading-relaxed">
                      {chunks}
                    </p>
                  ),
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
};

export default About;
