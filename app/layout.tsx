import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { ThemeProvider } from "@/components/theme-provider";
import { DarkToggle } from "@/components/dark-toggle";

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
          {/* Navbar */}
          <nav className="w-full sticky top-0 bg-background/80 backdrop-blur-md border-b border-border z-50">
            <NavigationMenu className="p-4 ml-auto">
              <NavigationMenuList className="gap-6">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="#landing"
                      className="font-medium transition-colors hover:text-primary"
                    >
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="#projects"
                      className="font-medium transition-colors hover:text-primary"
                    >
                      Projects
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="#tools"
                      className="font-medium transition-colors hover:text-primary"
                    >
                      Tools
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="#contact"
                      className="font-medium transition-colors hover:text-primary"
                    >
                      Contact
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
              {/* <NavigationMenuIndicator />
            <NavigationMenuViewport /> */}
              <DarkToggle />
            </NavigationMenu>
          </nav>

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
