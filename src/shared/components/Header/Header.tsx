import Image from "next/image";
import { Navigation } from "./Navigation";

export const Header = () => (
  <div className="flex gap-10 justify-center content-center p-10">
    <Image
      className="dark:invert"
      src="https://nextjs.org/icons/next.svg"
      alt="Next.js logo"
      width={90}
      height={20}
      priority
    />
    <Navigation />
  </div>
);
