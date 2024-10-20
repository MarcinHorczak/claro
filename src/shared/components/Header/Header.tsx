import Image from "next/image";
import { Navigation } from "./Navigation";

export const Header = () => (
  <div className="flex flex-wrap content-center justify-center gap-10 p-10">
    <Image
      src="https://nextjs.org/icons/next.svg"
      alt="Next.js logo"
      width={90}
      height={20}
      priority
    />
    <Navigation />
  </div>
);
