export type NavigationElementProps =
  | {
      name: string;
      href?: undefined;
      options: { name: string; href: string }[];
    }
  | {
      name: string;
      href: string;
      options?: undefined;
    };
