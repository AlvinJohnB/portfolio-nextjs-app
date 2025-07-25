import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // include only the weights you use
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alvin John Bregana | Portfolio",
  description: "A web portfolio showcasing my projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fredoka.className} ${fredoka.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="theme"
        >
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
