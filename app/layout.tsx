import type { Metadata } from "next";
import { Gupter, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const GUPTER = Gupter({ 
  subsets: ["latin"],
  weight:['400','500','700'],
  variable:'--font-gupter'
 });
const ROBOTO = Roboto_Condensed({ 
  subsets: ["latin"],
  weight:['400','500','600','700'],
  variable:'--font-roboto'
 });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        
        <body className={`${ROBOTO.variable} ${GUPTER.variable}`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
