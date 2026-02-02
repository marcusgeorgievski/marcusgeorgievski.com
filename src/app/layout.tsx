import type { Metadata } from "next";
import { geistSans, jetBrainsMono, tinos } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marcus Georgievski",
  description: "Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased`}>
        <main className="w-full flex-1 px-6 pt-14 pb-6 md:pb-10 md:px-10">
          <div className="max-w-xl mx-auto flex flex-col gap-20 pb-24">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
