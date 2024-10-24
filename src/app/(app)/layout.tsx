"use client";

import Link from "next/link";
import { IconShieldCheckFilled, IconUserCircle } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ModeToggle from "@/components/mode-toggle";
import clsx from "clsx";

const navbarItems: { title: string; href: string }[] = [
  // { title: "Manager", href: "/manager" },
];

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background/20 backdrop-blur-md px-6">
        <div className="flex w-full items-center gap-4 ml-auto">
          <nav className="gap-6 font-medium flex items-center text-sm">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold md:text-base"
            >
              <IconShieldCheckFilled className="h-6 w-6" />
              <p>Mi Shmeret</p>
            </Link>
            {navbarItems.map((link) => {
              const splittedPathname = pathname.split("/");
              const splittedLinkHref = link.href.split("/");

              const isActive = splittedLinkHref.every(
                (value, index) => splittedPathname[index] === value
              );

              return (
                <Link
                  key={`${link.title}-${link.href}`}
                  href={link.href}
                  className={clsx(
                    "transition-colors hover:text-foreground/80",
                    {
                      "text-foreground/60": !isActive,
                      "text-foreground": isActive,
                    }
                  )}
                >
                  {link.title}
                </Link>
              );
            })}
          </nav>
          <div className="flex-1"></div>

          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="rounded-full">
                {/* TODO: Add user from server */}
                {/* TODO: Add fallback UI when there's no user logged in */}
                <IconUserCircle className="mr-2 h-4 w-4" /> Ariel Yusim
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="max-w-screen-lg mx-auto container">{children}</div>
      </main>
    </div>
  );
}
