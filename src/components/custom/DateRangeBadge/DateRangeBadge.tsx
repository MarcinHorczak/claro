import { Calendar } from "lucide-react";
import { Badge } from "@components/ui";

type DateRangeBadgeProps = {
  startDate: string;
  endDate?: string;
};

export const DateRangeBadge = ({ startDate, endDate }: DateRangeBadgeProps) => (
  <Badge variant="secondary">
    <div className="flex items-center gap-1">
      <Calendar className="h-4 w-4" />
      <span>
        {new Date(startDate).toLocaleDateString("pl-PL", {
          day: "numeric",
          month: "short",
        })}
      </span>
      {endDate && (
        <>
          <span>-</span>
          <span>
            {new Date(endDate).toLocaleDateString("pl-PL", {
              day: "numeric",
              month: "short",
            })}
          </span>
        </>
      )}
    </div>
  </Badge>
);
