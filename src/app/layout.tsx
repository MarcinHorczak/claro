import { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
    name: "CLARO - Urszula Horczak",
    description: t("meta.pages.home.description"),
    url: BASE_URL,
    telephone: "+48519770996",
    email: "claro.rozwoj@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Imielin",
      addressRegion: "Śląskie",
      addressCountry: "PL",
    },
    serviceType: ["Life Coaching", "Coaching Relacji", "Warsztaty Rozwojowe"],
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
      images: [
        {
          url: UlaImage.src,
          alt: t("meta.title"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
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
            <div className="flex min-h-screen flex-col">
              <Header />
              <div className="flex-1">{children}</div>
              <Footer />
            </div>
          </NextIntlClientProvider>
        </NoSSRWrapper>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
