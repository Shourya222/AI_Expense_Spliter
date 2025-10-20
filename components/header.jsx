"use client";

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { useStoreUser } from "@/hooks/use-store-user";
import { BarLoader } from "react-spinners";
import { Authenticated, Unauthenticated } from "convex/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./theme-mode";
import { useTheme } from "next-themes";

export default function Header() {
  const { isLoading } = useStoreUser();
  const path = usePathname();
  const { theme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Avoid rendering until the theme is known
    return null;
  }
  // Base neutral color (visible instantly)
  const baseClasses =
    "fixed top-0 w-full border-b backdrop-blur z-50 supports-[backdrop-filter]:bg-opacity-60 transition-colors duration-300";

  // Pick background based on theme *only after mount*
  const themeClass = !mounted
    ? "bg-neutral-100 dark:bg-neutral-900"
    : theme === "light"
      ? "bg-white/95 supports-[backdrop-filter]:bg-white/60"
      : "bg-black/95 supports-[backdrop-filter]:bg-black/60";

  return (
    <header className={`${baseClasses} ${themeClass}`}>
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={"/logos/logo.png"}
            alt="Vehiql Logo"
            width={200}
            height={60}
            className="h-11 w-auto object-contain"
          />
        </Link>

        {path === "/" && (
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="#features"
              className="text-sm font-medium hover:text-[#ea5753] transition"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium hover:text-[#ea5753] transition"
            >
              How It Works
            </Link>
          </div>
        )}

        <div>
          <ModeToggle />
        </div>

        <div className="flex items-center gap-4">
          <Authenticated>
            <Link href="/dashboard">
              <Button
                variant="outline"
                className="hidden md:inline-flex items-center gap-2 hover:text-[#ea5753] hover:border-[#ea5753] transition"
              >
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </Button>
              <Button variant="ghost" className="md:hidden w-10 h-10 p-0">
                <LayoutDashboard className="h-4 w-4" />
              </Button>
            </Link>

            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                  userButtonPopoverCard: "shadow-xl",
                  userPreviewMainIdentifier: "font-semibold",
                },
              }}
              // afterSignOutUrl="/"
            />
          </Authenticated>

          <Unauthenticated>
            <SignInButton>
              <Button variant="ghost">Sign In</Button>
            </SignInButton>

            <SignUpButton>
              <Button className="bg-[#ea5753] hover:bg-[#c94b47] border-none">
                Get Started
              </Button>
            </SignUpButton>
          </Unauthenticated>
        </div>
      </nav>
      {isLoading && <BarLoader width={"100%"} color="[#c94b47]" />}
    </header>
  );
}
