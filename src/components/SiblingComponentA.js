import { useContext } from "react";
import ThemeContext from './ThemeContext';
import SubSiblingComponent from './SubSiblingComponent';

export default function SiblingComponentA(){
  // const { theme }  = useContext(ThemeContext);
  const { background }  = useContext(ThemeContext);
  // console.log("Sibling component A", theme);
  console.log("Sibling component A", background );

  return(
    <div>
      <h1 className={`${background === "normal" ? "complex" : "normal"}`}>
        Sibling Component A
      </h1>
      <SubSiblingComponent />
    </div>
  )
}