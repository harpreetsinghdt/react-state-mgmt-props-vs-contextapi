import { useContext } from "react";
import ThemeContext from './ThemeContext';

export default function SiblingComponentA(){
  const { theme }  = useContext(ThemeContext);
  console.log("Sibling component A", theme);

  return(
    <div>
      <h1 className={`${theme === "dark" ? "dark" : "light"}`}>
        Sibling Component A
      </h1>
    </div>
  )
}