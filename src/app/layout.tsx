import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { BGGrid } from "@/components/bg-grid";
import { heeboFont, rubikFont } from "./fonts";

export const metadata: Metadata = {
  title: "Mi Shmeret",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon-light.svg",
        href: "/favicon-light.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon-dark.svg",
        href: "/favicon-dark.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      dir={process.env.SITE_DIRECTION ?? "ltr"}
      className={`${rubikFont.variable} ${heeboFont.variable} antialiased`}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <BGGrid>{children}</BGGrid>

          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
