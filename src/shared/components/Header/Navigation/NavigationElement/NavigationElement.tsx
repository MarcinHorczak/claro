import Link from "next/link";

interface NavigationElementProps {
  name: string;
  href: string;
}

export const NavigationElement = ({ href, name }: NavigationElementProps) => (
  <div className="border w-full lg:w-auto">
    <Link href={href}>
      <div className="px-10 py-5">{name}</div>
    </Link>
  </div>
);
