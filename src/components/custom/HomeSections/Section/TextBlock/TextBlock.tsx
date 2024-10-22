export const TextBlock = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="flex flex-col gap-3">
    <p className="font-rwd w-full font-bold">{title}</p>
    <p className="font-rwd w-full">{description}</p>
  </div>
);
