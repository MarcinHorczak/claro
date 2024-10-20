import Link from "next/link";

interface NavigationElementProps {
  name: string;
  href: string;
}

export const NavigationElement = ({ href, name }: NavigationElementProps) => (
  <div className="w-full border lg:w-auto">
    <Link href={href}>
      <div className="px-10 py-5">{name}</div>
    </Link>
  </div>
);
