import { NavigationElement } from "./NavigationElement";
import { useNavigationElements } from "./Navigation.utils";

export const Navigation = () => {
  const navigationElements = useNavigationElements();

  return (
    <div className="flex flex-wrap gap-3">
      {navigationElements.map((navigationElementProps, index) => (
        <NavigationElement key={index} {...navigationElementProps} />
      ))}
    </div>
  );
};
