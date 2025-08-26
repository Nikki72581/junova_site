import "./globals.css";

import { Inter } from "next/font/google";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "junova",
  description: "cosmic automation.",
  icons: { icon: "/junova-logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
