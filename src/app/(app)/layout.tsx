import { Footer } from "@/components/layout/footer";
import { IconShieldCheckFilled } from "@tabler/icons-react";
import Link from "next/link";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container mx-auto flex max-w-[calc(65ch+100px)] min-h-screen gap-10 flex-col justify-between px-2 py-4 md:px-4 md:py-8">
      <main className="flex flex-col gap-10">
        <header className="flex align-center justify-center">
          <Link href="/" className="flex items-center gap-2 font-cal">
            <IconShieldCheckFilled className="size-7 fill-black dark:fill-white" />
            <span className="text-3xl font-mono font-semibold">מי שמרת</span>
          </Link>
        </header>

        {children}
      </main>
      <Footer />
    </div>
  );
}
