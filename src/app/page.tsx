"use client";

import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { HomeSections } from "@components/custom";
import { Button } from "@components/ui";
import { Paths } from "@utils/paths";

const Home = () => {
  const t = useTranslations();
  const router = useRouter();

  return (
    <div>
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
      <div className="flex flex-col items-center gap-5 bg-secondary px-6 py-20">
        <p className="font-header w-full text-center">
          {t("home.contactWithUs")}
        </p>
        <Button
          size="lg"
          onClick={() => router.push(Paths.Contact)}
          className="w-full md:w-auto"
        >
          {t("home.contact")}
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default Home;
