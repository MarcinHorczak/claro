import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import { Card, CardContent } from "@components/ui";
import { useBreakpoint } from "@utils";
import { ContentContainer } from "../ContentContainer";

interface CoachingSectionProps {
  title: string;
  subtitle: string;
  descriptionKey: string;
  image: StaticImageData;
  bgColor?: string;
  topPolygon?: boolean;
  bottomPolygon?: boolean;
  reverse?: boolean;
}

export const CoachingSection = ({
  title,
  subtitle,
  descriptionKey,
  image,
  bgColor = "bg-white",
  topPolygon = false,
  bottomPolygon = false,
  reverse = false,
}: CoachingSectionProps) => {
  const t = useTranslations();
  const isDesktop = useBreakpoint("lg");

  return (
    <ContentContainer
      bgColor={bgColor}
      topPolygon={topPolygon}
      bottomPolygon={bottomPolygon}
    >
      <div className="space-y-8 py-8 lg:py-16">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary">{title}</h2>
          <p className="text-base text-muted-foreground">{subtitle}</p>
        </div>
        <div
          className={`flex flex-col gap-8 lg:${reverse ? "flex-row-reverse" : "flex-row"} lg:items-stretch lg:px-4 xl:px-0`}
        >
          <div className="lg:w-2/5">
            <div className="relative h-64 md:h-96 lg:h-80">
              <Image
                src={image}
                alt="Life Coaching - sesje indywidualne"
                className="object-cover shadow-xl lg:rounded-2xl"
                fill
                sizes="(max-width: 1024px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
          </div>
          <div className="flex lg:w-3/5">
            <Card
              className={`flex w-full flex-col justify-center border-0 ${isDesktop ? "bg-white" : "bg-inherit"} shadow-none lg:rounded-2xl lg:shadow-xl`}
            >
              <CardContent className="flex h-full flex-col justify-center p-8">
                <div className="space-y-6">
                  {t.rich(descriptionKey, {
                    p: (chunks) => (
                      <p className="text-base leading-relaxed md:text-justify md:indent-8">
                        {chunks}
                      </p>
                    ),
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
};
