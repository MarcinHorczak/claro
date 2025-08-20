import { useTranslations } from "next-intl";
import Link from "next/link";
import { Paths } from "@utils/paths";

const NotFound = () => {
  const t = useTranslations();

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-lg">{t("notFound.description")}</p>
      <Link href={Paths.Home} className="text-lg underline">
        {t("notFound.backToHome")}
      </Link>
    </div>
  );
};

export default NotFound;
