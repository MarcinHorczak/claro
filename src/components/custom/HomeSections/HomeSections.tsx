import { Section } from "./Section";
import { useHomeSections } from "./HomeSections.utils";

export const HomeSections = () => {
  const sections = useHomeSections();

  return sections.map((section, index) => (
    <div key={index} className="py-10">
      <Section {...section} />
    </div>
  ));
};
