import { ReactNode } from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/shared/components";
import "../../public/globals.css";

const geistSans = localFont({
  src: "../../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Claro",
  description: "Claro",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => (
  <html lang="en">
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen`}
    >
      <div className="flex flex-col h-full">
        <Header />
        <div className="flex-1">{children}</div>
        <footer className="flex justify-center content-center bg-slate-100">
          <div className="p-5">Footer</div>
        </footer>
      </div>
    </body>
  </html>
);

export default RootLayout;
