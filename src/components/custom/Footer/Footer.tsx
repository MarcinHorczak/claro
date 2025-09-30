import { ForwardRefExoticComponent } from "react";
import { LucideProps, Mail, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { Text } from "@components/ui";

interface FooterItemProps {
  value: string;
  href: string;
  icon: ForwardRefExoticComponent<LucideProps>;
}

const FooterItem = ({ value, href, icon: Icon }: FooterItemProps) => (
  <a
    href={href}
    className="flex items-center gap-3 text-white/80 transition-colors hover:cursor-pointer hover:text-white md:justify-center"
  >
    <Icon size={24} strokeWidth={1.5} />
    <Text>{value}</Text>
  </a>
);

export const Footer = () => {
  const t = useTranslations();

  return (
    <div className="bg-primary text-white">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-8 md:text-center">
          <h3 className="text-xl font-bold">{t("home.contactWithUs")}</h3>
          <div className="flex flex-col justify-center gap-6 md:flex-row md:items-center">
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
          </div>
          <div className="border-t border-white/20 pt-8">
            <p className="text-sm text-white/70">
              {t("footer.copyright", { year: new Date().getFullYear() })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
