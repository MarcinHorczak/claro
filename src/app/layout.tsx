import { ReactNode } from "react";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Header } from "@/shared/components";
import "../../public/globals.css";

export const metadata: Metadata = {
  title: "Claro",
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
      <body className="box-border inline-block h-screen w-full bg-white text-black antialiased">
        <NextIntlClientProvider messages={messages}>
          <div className="flex h-full flex-col">
            <Header />
            <div className="flex-1 p-10">{children}</div>
            <footer className="flex content-center justify-center bg-slate-100">
              <div className="p-5">Footer</div>
            </footer>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
