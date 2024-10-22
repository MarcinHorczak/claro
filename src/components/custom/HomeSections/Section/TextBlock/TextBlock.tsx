import { useBreakpoint } from "@utils";

export const TextBlock = ({
  title,
  description,
  textAlignment,
}: {
  title: string;
  description: string;
  textAlignment: "left" | "right";
}) => {
  const isRowDirection = useBreakpoint("md");

  const textAlignmentClass = isRowDirection
    ? textAlignment === "left"
      ? "text-left"
      : "text-right"
    : "";

  return (
    <div className={`flex flex-col gap-3 ${textAlignmentClass}`}>
      <p className="font-rwd w-full font-bold">{title}</p>
      <p className="font-rwd w-full">{description}</p>
    </div>
  );
};
