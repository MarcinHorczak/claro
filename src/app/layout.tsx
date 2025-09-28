import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import { Toaster } from "sonner";
import { Footer, Header, NoSSRWrapper } from "@components/custom";
import "../globals.css";
import UlaImage from "/public/images/ula.webp";

const BASE_URL = "https://clarorozwoj.pl";

export const generateMetadata = async () => {
  const t = await getTranslations();

  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    url: BASE_URL,
    telephone: "+48519770996",
    email: "claro.rozwoj@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Imielin",
      addressRegion: "Śląskie",
      addressCountry: "PL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "50.1453400",
      longitude: "19.1859900",
    },
    priceRange: "$$$",
    name: t("structuredData.organization.name"),
    alternateName: t("structuredData.organization.alternateName"),
    description: t("structuredData.organization.description"),
    founder: {
      "@type": "Person",
      name: t("structuredData.organization.founder.name"),
      jobTitle: t("structuredData.organization.founder.jobTitle"),
      alumniOf: t("structuredData.organization.founder.alumniOf"),
    },
    areaServed: {
      "@type": "Place",
      name: t("structuredData.organization.areaServed"),
    },
    serviceType: [
      t("structuredData.organization.serviceTypes.0"),
      t("structuredData.organization.serviceTypes.1"),
      t("structuredData.organization.serviceTypes.2"),
    ],
  };

  return {
    title: { default: t("meta.title"), template: `%s | ${t("meta.title")}` },
    keywords: t("meta.keywords"),
    authors: [{ name: t("meta.author") }],
    creator: t("meta.author"),
    publisher: t("meta.author"),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "pl_PL",
      url: BASE_URL,
      siteName: "CLARO",
      title: t("meta.title"),
      images: [
        {
          url: UlaImage.src,
          width: 1200,
          height: 630,
          alt: t("meta.title"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("meta.title"),
      images: [UlaImage.src],
    },
    verification: { google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION },
    alternates: { canonical: BASE_URL },
    other: {
      "application/ld+json": JSON.stringify(organizationStructuredData),
    },
  };
};

const RootLayout = async ({ children }: Readonly<{ children: ReactNode }>) => {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NoSSRWrapper>
          <NextIntlClientProvider messages={messages}>
            <Toaster
              richColors
              position="bottom-center"
              duration={8000}
              closeButton
            />
            <Header />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </NoSSRWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
