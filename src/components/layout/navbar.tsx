import NavbarUserSection from "@/components/layout/navbar-user-section";
import { ModeToggle } from "@/components/layout/mode-toggle";
import { IconShieldCheckFilled } from "@tabler/icons-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex flex-1 align-center justify-between">
      <div className="flex-1">
        <ModeToggle />
      </div>

      <Link href="/" className="flex items-center gap-2 font-cal">
        <IconShieldCheckFilled className="size-7 fill-black dark:fill-white" />
        <span className="text-3xl font-mono font-semibold">מי שמרת</span>
      </Link>

      <div className="flex flex-1 justify-end">
        <NavbarUserSection />
      </div>
    </header>
  );
}
