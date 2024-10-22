import Link from "next/link";

interface NavigationElementProps {
  name: string;
  href: string;
}

export const NavigationElement = ({ href, name }: NavigationElementProps) => (
  <div className="w-auto rounded-lg border">
    <Link href={href}>
      <label className="flex h-full px-10 py-5 hover:cursor-pointer">
        {name}
      </label>
    </Link>
  </div>
);
