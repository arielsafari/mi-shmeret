import { ModeToggle } from "../theme/mode-toggle";
import { BrandName } from "./brand-name";

export function Footer() {
  return (
    <footer className="relative flex items-center justify-between">
      <BrandName />
      <ModeToggle />
    </footer>
  );
}
