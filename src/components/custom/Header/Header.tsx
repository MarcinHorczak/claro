import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

export const Header = () => (
  <div className="flex items-center justify-between px-10 py-5 xl:px-20 xl:py-10">
    <Logo />
    <Navigation />
  </div>
);
