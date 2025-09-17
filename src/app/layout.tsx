import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import { Toaster } from "sonner";
import { Footer, Header, NoSSRWrapper } from "@components/custom";
import "../globals.css";

export async function generateMetadata() {
  const t = await getTranslations();

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

const RootLayout = async ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
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
