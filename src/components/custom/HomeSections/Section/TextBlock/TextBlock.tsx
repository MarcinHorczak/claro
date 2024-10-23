export const TextBlock = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="flex flex-col gap-3">
    <p className="font-header w-full font-bold first-letter:text-primary">
      {title}
    </p>
    <p className="font-rwd w-full">{description}</p>
  </div>
);
