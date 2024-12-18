import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import NextThemeProviders from "@/providers/theme-provider";
import { ChatInsightStoreProvider } from "@/providers/chatInsightStoreProvider";
import { SITE_NAME } from "@/lib/utils/constants";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#daf8c4",
};

const siteTitle = `${SITE_NAME} - WhatsApp Analytics and Insights app`;
export const metadata: Metadata = {
  metadataBase: new URL("chat-analyser-git-main-mayanks-projects-8513f114.vercel.app"),
  title: siteTitle,
  description:
    "A full fledged application to analyze your whatsapp chat, fun facts, and its trends. It is 100% secure",
  
  openGraph: {
    type: "website",
    title: siteTitle,
    description:
      "A full fledged application to analyze your whatsapp chat, fun facts, and its trends. It is 100% secure",
    url: "chat-analyser-git-main-mayanks-projects-8513f114.vercel.app",
  },
  twitter: {
    title: siteTitle,
    description:
      "A full fledged application to analyze your whatsapp chat, fun facts, and its trends. It is 100% secure",
    card: "summary_large_image",
    site: "chat-analyser-git-main-mayanks-projects-8513f114.vercel.app",
    
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
  
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <NextThemeProviders>
            <NextTopLoader />
            <ChatInsightStoreProvider>{children}</ChatInsightStoreProvider>
          </NextThemeProviders>
          <Toaster />
        </body>
      </html>

  );
}
