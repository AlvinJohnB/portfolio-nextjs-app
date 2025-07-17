import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
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
          <nav className="w-full sticky top-0 bg-background">
            <NavigationMenu className="p-2 ml-auto">
              <NavigationMenuList>
                <NavigationMenuLink asChild>
                  <Link href="#landing" className="font-medium">
                    Home
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="#projects" className="font-medium">
                      Projects
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="#tools" className="font-medium">
                      Tools
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="#contact" className="font-medium">
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
