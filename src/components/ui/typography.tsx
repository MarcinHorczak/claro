import * as React from "react";
import { cn } from "@lib/utils";

const headingStyles = {
  h1: "text-3xl font-bold text-primary md:text-4xl",
  h2: "text-2xl font-bold text-primary md:text-3xl",
  h3: "text-xl font-semibold text-primary",
  h4: "text-lg font-semibold text-primary",
} as const;

const textStyles = {
  large: "md:text-lg text-base leading-relaxed",
  normal: "text-base leading-relaxed",
  small: "text-sm font-medium leading-none",
  caption: "text-sm text-muted-foreground",
  label: "text-sm font-medium text-gray-900",
  tiny: "text-xs",
  "caption-xs": "text-xs text-muted-foreground",
  "label-xs": "text-xs font-medium text-gray-900",
} as const;

type HeadingVariant = keyof typeof headingStyles;
type TextVariant = keyof typeof textStyles;

interface HeadingProps {
  variant?: HeadingVariant;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  children?: React.ReactNode;
}

interface TextProps {
  variant?: TextVariant;
  as?: "p" | "span" | "div" | "label" | "a";
  className?: string;
  children?: React.ReactNode;
}

const Heading = ({ variant, as = "h2", className, ...props }: HeadingProps) => {
  const Component = as as keyof JSX.IntrinsicElements;
  const finalVariant =
    variant || (as in headingStyles ? (as as HeadingVariant) : "h2");

  return (
    <Component
      className={cn(headingStyles[finalVariant], className)}
      {...props}
    />
  );
};

const Text = ({
  variant = "normal",
  as = "p",
  className,
  ...props
}: TextProps) => {
  const Component = as as keyof JSX.IntrinsicElements;

  return (
    <Component className={cn(textStyles[variant], className)} {...props} />
  );
};

export { Heading, Text };
export type { HeadingVariant, TextVariant };
