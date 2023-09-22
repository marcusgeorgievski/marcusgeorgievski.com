import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/ui/header";
import ThemeProvider from "@/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Marcus Georgievski",
	description: "Marcus Georgievski portfolio site!",
	viewport: {
		width: "device-width",
		initialScale: 1,
		maximumScale: 1,
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${inter.className} transition-colors`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
				>
					<div className="mb-16">
						<Header />
					</div>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
