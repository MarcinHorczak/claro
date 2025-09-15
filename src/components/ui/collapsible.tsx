"use client";

import * as React from "react";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import { cn } from "@lib/utils";

// Custom styles for smooth collapsible animation
const collapsibleStyles = `
  @keyframes collapsible-down {
    from {
      height: 0;
      opacity: 0;
    }
    to {
      height: var(--radix-collapsible-content-height);
      opacity: 1;
    }
  }

  @keyframes collapsible-up {
    from {
      height: var(--radix-collapsible-content-height);
      opacity: 1;
    }
    to {
      height: 0;
      opacity: 0;
    }
  }

  .collapsible-content[data-state="open"] {
    animation: collapsible-down 0.25s ease-out;
  }

  .collapsible-content[data-state="closed"] {
    animation: collapsible-up 0.2s ease-in;
  }
`;

const Collapsible = CollapsiblePrimitive.Root;

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;

const CollapsibleContent = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.CollapsibleContent>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.CollapsibleContent>
>(({ className, children, ...props }, ref) => (
  <>
    <style dangerouslySetInnerHTML={{ __html: collapsibleStyles }} />
    <CollapsiblePrimitive.CollapsibleContent
      ref={ref}
      className={cn("collapsible-content overflow-hidden", className)}
      {...props}
    >
      {children}
    </CollapsiblePrimitive.CollapsibleContent>
  </>
));
CollapsibleContent.displayName =
  CollapsiblePrimitive.CollapsibleContent.displayName;

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
