import Link from "next/link";

interface NavigationElementProps {
  name: string;
  href: string;
}

export const NavigationElement = ({ href, name }: NavigationElementProps) => (
  <Link href={href}>
    <div className="px-10 py-5 border">{name}</div>
  </Link>
);
