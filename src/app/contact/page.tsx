import { getTranslations } from "next-intl/server";
import { ContactClient } from "./clientPage";

export const generateMetadata = async () => {
  const t = await getTranslations();

  return {
    title: t("meta.pages.contact.title"),
    description: t("meta.pages.contact.description"),
  };
};

const Contact = () => {
  return <ContactClient />;
};

export default Contact;
