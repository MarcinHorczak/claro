import Link from "next/link";

interface NavigationElementProps {
  name: string;
  href: string;
}

export const NavigationElement = ({ href, name }: NavigationElementProps) => (
  <div className="w-full rounded-lg border lg:w-auto">
    <Link href={href}>
      <div className="flex h-full items-center px-10 py-5">{name}</div>
    </Link>
  </div>
);
