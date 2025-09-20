import { cn } from "@lib/utils";

interface PolygonClipProps {
  polygonHeight?: number;
  bgColor?: string;
  variant: "top" | "bottom";
}

export const PolygonClip = ({
  polygonHeight = 16,
  bgColor,
  variant,
}: PolygonClipProps) => (
  <div className="relative" style={{ height: `${polygonHeight * 4}px` }}>
    <div
      className={`absolute w-full ${variant === "top" ? "bottom-0" : "top-0"}`}
      style={{ height: `${polygonHeight * 2}px` }}
    >
      <div
        className={`absolute ${variant === "top" ? "bottom-0" : "top-0"} w-full ${bgColor} opacity-40`}
        style={{
          height: `${polygonHeight * 2}px`,
          clipPath: cn(
            variant === "top" && "polygon(0 100%, 100% 0%, 100% 100%, 0% 100%)",
            variant === "bottom" && "polygon(0 0%, 100% 0%, 100% 100%, 0% 0%)",
          ),
        }}
      />
    </div>
    <div
      className={`absolute w-full ${variant === "top" ? "bottom-0" : "top-0"}`}
      style={{ height: `${polygonHeight * 4}px` }}
    >
      <div
        className={`absolute ${variant === "top" ? "bottom-0" : "top-0"} w-full ${bgColor} opacity-30`}
        style={{
          height: `${polygonHeight * 4}px`,
          clipPath: cn(
            variant === "top" && "polygon(0 100%, 100% 0%, 100% 100%, 0% 100%)",
            variant === "bottom" && "polygon(0 0%, 100% 0%, 100% 100%, 0% 0%)",
          ),
        }}
      />
    </div>
  </div>
);
