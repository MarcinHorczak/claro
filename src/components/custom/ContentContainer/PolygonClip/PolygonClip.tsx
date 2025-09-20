import { cn } from "@lib/utils";

interface PolygonClipProps {
  polygonHeight: number;
  bgColor?: string;
  variant: "top" | "bottom";
}

export const PolygonClip = ({
  polygonHeight,
  bgColor,
  variant,
}: PolygonClipProps) => (
  <div className={`relative h-${polygonHeight}`}>
    <div
      className={`absolute w-full ${variant === "top" ? "bottom-0" : "top-0"}`}
    >
      <div
        className={`absolute ${variant === "top" ? "bottom-0" : "top-0"} h-${polygonHeight / 2} w-full ${bgColor} opacity-40`}
        style={{
          clipPath: cn(
            variant === "top" && "polygon(0 100%, 100% 0%, 100% 100%, 0% 100%)",
            variant === "bottom" && "polygon(0 0%, 100% 0%, 100% 100%, 0% 0%)",
          ),
        }}
      />
    </div>
    <div
      className={`absolute w-full ${variant === "top" ? "bottom-0" : "top-0"}`}
    >
      <div
        className={`absolute ${variant === "top" ? "bottom-0" : "top-0"} h-${polygonHeight} w-full ${bgColor} opacity-30`}
        style={{
          clipPath: cn(
            variant === "top" && "polygon(0 100%, 100% 0%, 100% 100%, 0% 100%)",
            variant === "bottom" && "polygon(0 0%, 100% 0%, 100% 100%, 0% 0%)",
          ),
        }}
      />
    </div>
  </div>
);
