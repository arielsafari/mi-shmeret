import Link from "next/link";
import * as React from "react";
import { IconShieldCheckFilled } from "@tabler/icons-react";

export function BrandName() {
  return (
    <Link href="/" className="flex items-center gap-2 font-cal">
      <IconShieldCheckFilled className="size-5 fill-black dark:fill-white" />
      <span className="text-base font-mono font-semibold">מי שמרת</span>
    </Link>
  );
}
