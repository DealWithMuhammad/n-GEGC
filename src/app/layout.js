import { Inter } from "next/font/google";
import "./globals.css";

import NextTopLoader from "nextjs-toploader";

import { Providers } from "./providers";
import Header from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GEGC",
  description: "Under Deplyoment of Muhammad",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <NextTopLoader color="#f8cf2c" />
          <Header />
          <main className="min-h-screen">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
