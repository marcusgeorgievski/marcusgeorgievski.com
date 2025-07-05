import type { Metadata } from "next";
import { geistMono, geistSans } from "@/lib/fonts";
import "./globals.css";
import { ThemeProvider } from "@/components/core/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/core/footer";

export const metadata: Metadata = {
  title: "Marcus Georgievski",
  description: "description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="w-full flex-1 px-6 pt-14 pb-6 md:pb-10 md:px-10">
            <div className="max-w-xl mx-auto flex flex-col gap-20 pb-24">
              {children}
              <Footer />
            </div>
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
