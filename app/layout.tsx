import "./globals.css";
import type { Metadata } from "next";
import { Gupter, Roboto_Condensed } from "next/font/google";
import { ClerkProvider, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { GlobalProvider } from "@/context/GlobalProvider";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";

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
      <GlobalProvider>

        <body className={`${ROBOTO.variable} ${GUPTER.variable} bg-gradient-radial to-secondary-100 from-secondary-200 `}>
          <Navbar/>
          {children}
        <Toaster/>
          </body>
      </GlobalProvider>
      </html>
    </ClerkProvider>
  );
}
