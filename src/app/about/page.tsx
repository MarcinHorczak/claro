import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { ContentContainer, PageContainer } from "@components/custom";
import { Heading } from "@components/ui";
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
    <PageContainer>
      <ContentContainer>
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
                <Heading className="mb-6 text-center">
                  {t("about.name")}
                </Heading>
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
                <Heading>{t("about.name")}</Heading>
                <div className="flex-1 space-y-6 py-8">
                  {t.rich("about.description", {
                    p: (chunks) => (
                      <p className="indent-8 leading-relaxed">{chunks}</p>
                    ),
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentContainer>
    </PageContainer>
  );
};

export default About;
