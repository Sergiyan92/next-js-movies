import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Heder from "@/components/header/Heder";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie",
  description: "Movie by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Heder />
        {children}
      </body>
    </html>
  );
}
