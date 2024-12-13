import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { poppins, jetbrainsMono } from "./fonts";
import "./globals.css";

export const metadata = {
  title: "StoryForge - AI-Powered Book Writing Platform",
  description:
    "Transform your ideas into beautifully crafted books using artificial intelligence.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${poppins.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
