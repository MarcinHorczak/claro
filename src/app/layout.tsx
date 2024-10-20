import { ReactNode } from "react";
import type { Metadata } from "next";
import { Header } from "@/shared/components";
import "../../public/globals.css";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

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
      <body className="antialiased h-screen w-full inline-block box-border text-black bg-white">
        <NextIntlClientProvider messages={messages}>
          <div className="flex flex-col h-full">
            <Header />
            <div className="flex-1 p-10">{children}</div>
            <footer className="flex justify-center content-center bg-slate-100">
              <div className="p-5">Footer</div>
            </footer>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
