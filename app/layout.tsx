import type { Metadata } from "next";
import "./globals.css";
import MainHeader from "@/components/main-header";

export const metadata: Metadata = {
  title: "Art Echo Designe",
  description: "Art Echo Designe - Exclusive Designer Decor",
};

import { League_Spartan, Quicksand } from "next/font/google";
import MainFooter from "@/components/main-footer";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${leagueSpartan.className} ${quicksand.className}`}
    >
      <body className="bg-neutral-300 min-h-screen">
        <MainHeader />
        {children}
        <MainFooter />
      </body>
    </html>
  );
}
