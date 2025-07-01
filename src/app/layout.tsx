import { ReactNode } from "react";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Footer, Header } from "@components/custom";
import "../globals.css";

export const metadata: Metadata = {
  title: "CLARO | Ula Horczak",
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
        <NextIntlClientProvider messages={messages}>
          <Header />
          <div className="flex w-full justify-center">
            <div className="max-w-[1170px]">{children}</div>
          </div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
