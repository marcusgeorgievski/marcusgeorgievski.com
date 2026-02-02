import { Geist, Geist_Mono, Inter, JetBrains_Mono } from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const inter = Inter({
  variable: "--font-inter-latin",
  subsets: ["latin"],
});

export const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

import { Tinos } from "next/font/google";

export const tinos = Tinos({
  variable: "--font-tinos",
  weight: "400",
  subsets: ["latin"],
});
