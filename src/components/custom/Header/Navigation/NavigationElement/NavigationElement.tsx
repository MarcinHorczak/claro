"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";
import { NavigationElementProps } from "../Navigation.types";

export const NavigationElement = ({
  href,
  name,
  options,
}: NavigationElementProps) => {
  if (options) {
    return (
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <div className="w-auto cursor-pointer rounded-lg border border-primary text-primary transition-all duration-300 ease-in-out hover:bg-primary hover:text-primary-foreground">
            <label className="flex h-full items-center gap-2 px-6 py-2 hover:cursor-pointer">
              {name}
              <ChevronDown size={16} />
            </label>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {options.map((option, index) => (
            <DropdownMenuItem
              key={index}
              asChild
              className="text-primary focus:bg-primary focus:text-primary-foreground data-[highlighted]:bg-primary data-[highlighted]:text-primary-foreground"
            >
              <Link href={option.href} className="w-full hover:cursor-pointer">
                {option.name}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <Link href={href}>
      <div className="w-auto rounded-lg border border-primary text-primary transition-all duration-300 ease-in-out hover:bg-primary hover:text-primary-foreground">
        <label className="flex h-full px-6 py-2 hover:cursor-pointer">
          {name}
        </label>
      </div>
    </Link>
  );
};
