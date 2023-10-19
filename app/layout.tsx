import type { Metadata } from "next";
import IconLogo from "/public/assets/images/logo.png";
import localFont from "next/font/local";
import "./globals.css";

const myFont = localFont({
  src: [
    {
      path: "../public/assets/fonts/circular-std-medium.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/circular-std-bold.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/circular-std-black.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/circular-std-medium-italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/assets/fonts/circular-std-bold-italic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/assets/fonts/circular-std-black-italic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-circular-std",
});

export const metadata: Metadata = {
  title: "Win_Lax Digi.Business",
  description: "Win_Lax Digi.Business Figma Design to Next.js",
  icons: [{ rel: "icon", url: IconLogo.src }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${myFont.variable} font-sans`}>
      <body className="bg-[#f6f6f6]">{children}</body>
    </html>
  );
}
