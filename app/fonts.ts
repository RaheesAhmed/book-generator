import { Poppins, JetBrains_Mono } from "next/font/google";

// Poppins - Main font for everything
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

// JetBrains Mono - Monospace font (keeping for code snippets if needed)
export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});
