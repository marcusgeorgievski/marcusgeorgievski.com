import { Inter, JetBrains_Mono } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

import localFont from "next/font/local";

export const cmu = localFont({
  src: "../../public/cmunrm.ttf",
  display: "swap",
});
