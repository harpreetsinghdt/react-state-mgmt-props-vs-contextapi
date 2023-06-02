import { useState } from "react";
import ThemeContext from "./ThemeContext";

const ContextProvider = ({ children }) => {
  // const [theme, setTheme] = useState("light");
  const [background, setBackground] = useState("normal");

  const toggleTheme = () => {
    setBackground((prevTheme) => (prevTheme === "normal" ? "complex" : "normal"));
  };

  return(
    <ThemeContext.Provider value={{ background, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ContextProvider;