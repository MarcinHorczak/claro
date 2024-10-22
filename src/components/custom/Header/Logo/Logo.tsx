import Image from "next/image";
import LogoIcon from "/public/logo.svg";

export const Logo = () => (
  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary sm:h-24 sm:w-24">
    <Image src={LogoIcon} alt="Logo" priority className="w-6 sm:w-12" />
  </div>
);
