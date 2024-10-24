import { ForwardRefExoticComponent } from "react";
import { LucideProps, Mail, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

interface FooterItemProps {
  value: string;
  href: string;
  icon: ForwardRefExoticComponent<LucideProps>;
}

const FooterItem = ({ value, href, icon: Icon }: FooterItemProps) => (
  <a
    href={href}
    className="flex items-center gap-2 hover:cursor-pointer hover:underline md:justify-center"
  >
    <Icon size={30} strokeWidth={1} />
    <p>{value}</p>
  </a>
);

export const Footer = () => {
  const t = useTranslations();

  return (
    <div className="flex flex-col justify-center gap-5 bg-secondary px-6 py-14">
      <p className="font-bold md:text-center">{t("home.contactWithUs")}</p>
      <FooterItem
        value={t("footer.phone")}
        href={`tel:${t("footer.phone").split(" ").join("")}`}
        icon={Phone}
      />
      <FooterItem
        value={t("footer.email")}
        href={`mailto:${t("footer.email")}`}
        icon={Mail}
      />
      <p className="pt-2 text-[0.75rem] md:text-center">
        {t("footer.copyright", { year: new Date().getFullYear() })}
      </p>
    </div>
  );
};
