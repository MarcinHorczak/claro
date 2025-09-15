import { ReactNode } from "react";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Footer, Header, NoSSRWrapper } from "@components/custom";
import "../globals.css";

export const metadata: Metadata = {
  title: "CLARO | Urszula Horczak",
  description: "Claro",
};

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
