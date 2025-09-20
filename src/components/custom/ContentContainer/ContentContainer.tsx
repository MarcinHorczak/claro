import { ReactNode } from "react";
import { PolygonClip } from "./PolygonClip";

interface ContentContainerProps {
  children: ReactNode;
  bgColor?: string;
  topPolygon?: boolean;
  bottomPolygon?: boolean;
  polygonHeight?: number;
}

export const ContentContainer = ({
  children,
  bgColor,
  topPolygon = false,
  bottomPolygon = false,
  polygonHeight,
}: ContentContainerProps) => (
  <div>
    {topPolygon && (
      <PolygonClip
        polygonHeight={polygonHeight}
        bgColor={bgColor}
        variant="top"
      />
    )}
    <div className={`flex w-full justify-center ${bgColor || ""}`}>
      <div className="w-full max-w-[1170px]">{children}</div>
    </div>
    {bottomPolygon && (
      <PolygonClip
        polygonHeight={polygonHeight}
        bgColor={bgColor}
        variant="bottom"
      />
    )}
  </div>
);
