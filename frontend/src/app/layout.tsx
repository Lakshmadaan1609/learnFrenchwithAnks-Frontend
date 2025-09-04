import type { Metadata } from "next";
import { Montserrat, Lato } from "next/font/google";
import ParallaxWrapper from "./components/ParallaxWrapper";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Learn French With Anks - Master French for Your Canada PR Dream",
  description: "Personalized TEF & TCF coaching to help you achieve CLB 7+ and boost your CRS score. Expert French language training for Canada PR aspirants.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${lato.variable} antialiased`}
      >
        <ParallaxWrapper>
          {children}
        </ParallaxWrapper>
      </body>
    </html>
  );
}
