"use client";

import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@components/ui/sheet";
import { useBreakpoint } from "@utils";
import { NavigationElement } from "./NavigationElement";
import { useNavigationElements } from "./Navigation.utils";

export const Navigation = () => {
  const navigationElements = useNavigationElements();
  const isFullMenu = useBreakpoint("xl");

  if (isFullMenu) {
    return (
      <div className="flex flex-wrap gap-3">
        {navigationElements.map((navigationElementProps, index) => (
          <div key={index}>
            <NavigationElement {...navigationElementProps} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon size={40} strokeWidth={1.5} />
      </SheetTrigger>
      <SheetContent
        side="top"
        className="w-full bg-primary py-20 text-primary-foreground"
      >
        <SheetHeader>
          <SheetTitle />
          <SheetDescription />
          {navigationElements.map(({ href, name }, index) => (
            <SheetClose asChild key={index}>
              <Link href={href}>
                <Button variant="ghost" className="w-full py-8 font-bold">
                  {name}
                </Button>
              </Link>
            </SheetClose>
          ))}
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
