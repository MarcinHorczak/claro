import { getTranslations } from "next-intl/server";
import { UnderConstruction } from "@components/custom";

export async function generateMetadata() {
  const t = await getTranslations();

  return {
    title: t("meta.pages.sessions.title"),
    description: t("meta.pages.sessions.description"),
  };
}

const Sessions = async () => {
  // const { data: sessions } = await getSessionCategories();

  // return <SessionsClient sessions={sessions || []} />;

  return <UnderConstruction />;
};

export default Sessions;
