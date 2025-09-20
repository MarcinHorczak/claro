import { cn } from "@lib/utils";
import { PolygonVariant } from "@utils/enums";

interface PolygonClipProps {
  polygonHeight?: number;
  bgColor?: string;
  polygonVariants?: PolygonVariant[];
}

export const PolygonClip = ({
  polygonHeight = 16,
  bgColor,
  polygonVariants,
}: PolygonClipProps) => {
  const isTopLeftPolygon = polygonVariants?.includes(PolygonVariant.TopLeft);
  const isBottomLeftPolygon = polygonVariants?.includes(
    PolygonVariant.BottomLeft,
  );
  const isTopRightPolygon = polygonVariants?.includes(PolygonVariant.TopRight);
  const isBottomRightPolygon = polygonVariants?.includes(
    PolygonVariant.BottomRight,
  );
  const isTopPolygon = isTopLeftPolygon || isTopRightPolygon;

  const polygon = cn(
    isTopLeftPolygon && "polygon(0 0%, 100% 100%, 100% 100%, 0% 100%)",
    isTopRightPolygon && "polygon(0 100%, 100% 0%, 100% 100%, 0% 100%)",
    isBottomLeftPolygon && "polygon(0 0%, 100% 0%, 0% 100%, 0% 0%)",
    isBottomRightPolygon && "polygon(0 0%, 100% 0%, 100% 100%, 0% 0%)",
  );

  return (
    <div className="relative" style={{ height: `${polygonHeight * 4}px` }}>
      <div
        className={`absolute w-full ${isTopPolygon ? "bottom-0" : "top-0"}`}
        style={{ height: `${polygonHeight * 2}px` }}
      >
        <div
          className={`absolute ${isTopPolygon ? "bottom-0" : "top-0"} w-full ${bgColor} opacity-40`}
          style={{
            height: `${polygonHeight * 2}px`,
            clipPath: polygon,
          }}
        />
      </div>
      <div
        className={`absolute w-full ${isTopPolygon ? "bottom-0" : "top-0"}`}
        style={{ height: `${polygonHeight * 4}px` }}
      >
        <div
          className={`absolute ${isTopPolygon ? "bottom-0" : "top-0"} w-full ${bgColor} opacity-30`}
          style={{
            height: `${polygonHeight * 4}px`,
            clipPath: polygon,
          }}
        />
      </div>
    </div>
  );
};
