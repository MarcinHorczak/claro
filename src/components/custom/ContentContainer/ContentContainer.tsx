import { ReactNode } from "react";
import { PolygonVariant } from "@utils/enums";
import { PolygonClip } from "./PolygonClip";

interface ContentContainerProps {
  children: ReactNode;
  bgColor?: string;
  polygonHeight?: number;
  polygonVariants?: PolygonVariant[];
  compact?: boolean;
}

export const ContentContainer = ({
  children,
  bgColor,
  polygonHeight,
  polygonVariants,
  compact = false,
}: ContentContainerProps) => {
  const isTopPolygon =
    polygonVariants?.includes(PolygonVariant.TopLeft) ||
    polygonVariants?.includes(PolygonVariant.TopRight);
  const isBottomPolygon =
    polygonVariants?.includes(PolygonVariant.BottomLeft) ||
    polygonVariants?.includes(PolygonVariant.BottomRight);

  return (
    <div
      className={`${isTopPolygon && compact ? "mt-[-64px]" : ""} ${isBottomPolygon && compact ? "mb-[-64px]" : ""}`}
    >
      {isTopPolygon && (
        <PolygonClip
          polygonHeight={polygonHeight}
          bgColor={bgColor}
          polygonVariants={polygonVariants?.filter((variant) =>
            variant.startsWith("top"),
          )}
        />
      )}
      <div className={`flex w-full justify-center ${bgColor || ""}`}>
        <div className="w-full max-w-[1170px]">{children}</div>
      </div>
      {isBottomPolygon && (
        <PolygonClip
          polygonHeight={polygonHeight}
          bgColor={bgColor}
          polygonVariants={polygonVariants?.filter((variant) =>
            variant.startsWith("bottom"),
          )}
        />
      )}
    </div>
  );
};
