import Image from "next/image";
import { Navigation } from "./Navigation";

export const Header = () => (
  <div className="flex flex-wrap content-center justify-center gap-10 p-10">
    <div className="bg-primary flex h-20 w-20 items-center justify-center rounded-full">
      <div>
        <Image src="/logo.svg" alt="Logo" priority height={40} width={40} />
      </div>
    </div>
    <Navigation />
  </div>
);
