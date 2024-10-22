import Image from "next/image";
import LogoIcon from "/public/logo.svg";

export const Logo = () => (
  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary">
    <Image src={LogoIcon} alt="Logo" priority className="w-12" />
  </div>
);
