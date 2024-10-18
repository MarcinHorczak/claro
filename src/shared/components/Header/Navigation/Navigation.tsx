import { useNavigationElements } from "./Navigation.utils";
import { NavigationElement } from "./NavigationElement";

export const Navigation = () => {
  const navigationElements = useNavigationElements();

  return (
    <div className="flex gap-3">
      {navigationElements.map((navigationElementProps, index) => (
        <NavigationElement key={index} {...navigationElementProps} />
      ))}
    </div>
  );
};
