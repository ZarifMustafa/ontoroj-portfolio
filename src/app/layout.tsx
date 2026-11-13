import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ontoroj — Product & SaaS Studio",
  description:
    "Ontoroj is a small, senior product team designing and building SaaS and software products end to end.",
  metadataBase: new URL("https://ontoroj.vercel.app"),
  openGraph: {
    title: "Ontoroj — Product & SaaS Studio",
    description:
      "Ontoroj is a small, senior product team designing and building SaaS and software products end to end.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#060608] text-zinc-100">
        {children}
      </body>
    </html>
  );
}
