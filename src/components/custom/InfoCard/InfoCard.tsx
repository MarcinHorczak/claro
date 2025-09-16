import { useTranslations } from "next-intl";
import Link from "next/link";
import { Paths } from "@utils/paths";

interface InfoCardProps {
  titleKey: string;
  descriptionKey: string;
}

export const InfoCard = ({ titleKey, descriptionKey }: InfoCardProps) => {
  const t = useTranslations();

  return (
    <section className="w-full rounded-3xl bg-white p-8 shadow-xl md:p-12">
      <h2 className="mb-6 text-lg font-bold text-primary md:text-2xl">
        {t(titleKey)}
      </h2>
      {t.rich(descriptionKey, {
        div: (chunks) => <div className="space-y-4">{chunks}</div>,
        p: (chunks) => (
          <p className="text-md text-justify indent-8 leading-relaxed">
            {chunks}
          </p>
        ),
        ul: (chunks) => (
          <ul className="text-md space-y-2 leading-relaxed text-gray-700">
            {chunks}
          </ul>
        ),
        li: (chunks) => (
          <li className="text-md flex items-start leading-relaxed text-gray-700">
            <span className="mr-3.5 mt-[0.625rem] h-2 w-2 flex-shrink-0 rounded-full bg-primary"></span>
            {chunks}
          </li>
        ),
        h3: (chunks) => <h3 className="text-md font-bold">{chunks}</h3>,
        contactLink: (chunks) => (
          <Link href={Paths.Contact} className="text-primary underline">
            {chunks}
          </Link>
        ),
      })}
    </section>
  );
};
