export type NavigationElementProps =
  | {
      name: string;
      disabled?: true;
      href?: undefined;
      options: { name: string; href: string; disabled?: true }[];
    }
  | {
      name: string;
      disabled?: true;
      href: string;
      options?: undefined;
    };
