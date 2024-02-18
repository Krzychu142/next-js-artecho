import type { Metadata } from "next";
import "./globals.css";
import MainHeader from "@/components/main-page/main-header";
import MainFooter from "@/components/main-page/main-footer";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { League_Spartan, Quicksand } from "next/font/google";
import Providers from "@/components/providers";

export const metadata: Metadata = {
  title: "Art Echo Designe",
  description: "Art Echo Designe - Exclusive Designer Decor",
};

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
      <body className="flex flex-col min-h-screen">
        <Providers>
          <AntdRegistry>
            <MainHeader />
            <main className="flex-grow">{children}</main>
            <MainFooter />
          </AntdRegistry>
        </Providers>
      </body>
    </html>
  );
}
