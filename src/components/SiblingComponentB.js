import { useContext } from "react";
import ThemeContext from './ThemeContext';

export default function SiblingComponentB(){
  const { theme }  = useContext(ThemeContext);
  console.log("Sibling component B", theme);

  return(
    <div>
      <h1 className={`${theme === "dark" ? "dark" : "light"}`}>
        Sibling Component B
      </h1>
    </div>
  )
}

