import { useContext } from "react";
import ThemeContext from "./ThemeContext";

export default function ThemeButton() {
  const { toggleTheme } = useContext(ThemeContext);

  return <button onClick={toggleTheme} >ThemeButton</button>;
}