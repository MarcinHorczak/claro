import { Section } from "./Section";
import { useHomeSections } from "./HomeSections.utils";

export const HomeSections = () => {
  const sections = useHomeSections();

  // TODO: add section scrolling logic
  return sections.map((section, index) => <Section key={index} {...section} />);
};
