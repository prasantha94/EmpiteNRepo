import type { Metadata } from "next";

import "./globals.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Mulish, Playfair_Display, Space_Grotesk } from "next/font/google";
import { SiAdobexd } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";

const mulish = Mulish({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mulish",
});
const playfairDisplay = Playfair_Display({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfairDisplay",
});
const spaceGrotesk = Space_Grotesk({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-spaceGrotesk",
});
export const metadata: Metadata = {
  title: "UI Test - 01",
  description: "UI/UX App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${mulish.variable} ${playfairDisplay.variable} ${spaceGrotesk.variable}`}
    >
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
