import Image from "next/image";
import { Navigation } from "./Navigation";

export const Header = () => (
  <div className="flex flex-wrap content-center justify-center gap-10 p-10">
    <div>
      <Image src="/logo.png" alt="Logo" width={60} height={56} priority />
    </div>
    <Navigation />
  </div>
);
