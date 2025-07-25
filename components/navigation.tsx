"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { DarkToggle } from "@/components/dark-toggle";

const navigationItems = [
  { href: "#landing", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#tools", label: "Tools" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("landing");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3, // Section needs to be 30% visible to be considered active
        rootMargin: "-80px 0px -80px 0px", // Account for the sticky navbar height
      }
    );

    // Observe all sections
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleNavClick = (href: string) => {
    const sectionId = href.substring(1);
    setActiveSection(sectionId);

    // Smooth scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="w-full sticky top-0 bg-background/80 backdrop-blur-md border-b border-border z-50">
      <NavigationMenu className="p-4 ml-auto">
        <NavigationMenuList className="gap-6">
          {navigationItems.map((item) => (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuLink asChild>
                <Link
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`font-medium transition-all duration-200 hover:text-primary ${
                    activeSection === item.href.substring(1)
                      ? "text-primary bg-primary/10 px-3 py-1 rounded-md border border-primary/20"
                      : "text-muted-foreground hover:bg-muted/50 px-3 py-1 rounded-md"
                  }`}
                >
                  {item.label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
        <DarkToggle />
      </NavigationMenu>
    </nav>
  );
}
