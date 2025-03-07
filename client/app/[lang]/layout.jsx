import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { ClerkProvider } from "@clerk/nextjs";
import { GlobalProvider } from "@/context/GlobalContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FinWise",
  description: "Developed in Mumbai Tech Week Hackathon organized by NPCI",
};

export async function generateStaticParams() {
  return [{ lang: "en-US" }, { lang: "hi" }, { lang: "mr" }];
}

export default async function RootLayout({ children, params }) {
  return (
    <ClerkProvider>
      <GlobalProvider>
        <LanguageProvider>
          <html lang={(await params).lang} suppressHydrationWarning>
            <body
              className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
              {children}
            </body>
          </html>
        </LanguageProvider>
      </GlobalProvider>
    </ClerkProvider>
  );
}
