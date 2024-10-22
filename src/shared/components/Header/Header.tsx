import Image from "next/image";
import { Navigation } from "./Navigation";
import LogoIcon from "../../../../public/logo.svg";

export const Header = () => (
  <div className="flex flex-wrap content-center justify-center gap-10 p-10">
    <div className="bg-primary flex h-20 w-20 items-center justify-center rounded-full">
      <div>
        <Image src={LogoIcon} alt="Logo" priority className="w-10" />
      </div>
    </div>
    <Navigation />
  </div>
);
