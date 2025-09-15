"use client";

import { ChevronDown, MenuIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@components/ui/collapsible";
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
          {navigationElements.map((element, index) => (
            <div key={index} className="mb-4">
              {element.options ? (
                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <Button
                      variant="ghost"
                      className="relative flex w-full items-center justify-center py-8 text-lg font-bold transition-colors duration-200 hover:bg-white hover:text-primary"
                    >
                      <span className="flex-1">{element.name}</span>
                      <ChevronDown className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 transition-transform duration-150 data-[state=open]:rotate-180" />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="space-y-2 px-4 pt-4">
                      {element.options.map((option, optionIndex) => (
                        <SheetClose asChild key={optionIndex}>
                          <Link href={option.href}>
                            <Button
                              variant="ghost"
                              className="w-full justify-center py-5 text-center text-sm font-medium transition-all duration-200 hover:bg-white hover:text-primary"
                            >
                              {option.name}
                            </Button>
                          </Link>
                        </SheetClose>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ) : (
                <SheetClose asChild>
                  <Link href={element.href}>
                    <Button
                      variant="ghost"
                      className="w-full py-8 text-lg font-bold transition-colors duration-200 hover:bg-white hover:text-primary"
                    >
                      {element.name}
                    </Button>
                  </Link>
                </SheetClose>
              )}
            </div>
          ))}
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
