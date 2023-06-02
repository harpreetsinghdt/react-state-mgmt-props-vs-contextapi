import { useContext } from "react";
import ThemeContext from './ThemeContext';

export default function SubSiblingComponent() {
  const { theme }  = useContext(ThemeContext);
  console.log("Sub Sibling component", theme);
  return (
    <div>
      <h1 className={`${theme === "dark" ? "dark" : "light"}`}>
      This is SubSiblingComponent
      </h1>
    </div>
  )
}
