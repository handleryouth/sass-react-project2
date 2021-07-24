import { useState, createContext, useEffect } from "react";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import "./scss/main.scss";

export const themeContext = createContext();

const THEME_KEY = "Theme";

export default function App() {
  // this means dark theme activate (initial value " true" )
  const [theme, setTheme] = useState(true);

  useEffect(() => {
    const localTheme = localStorage.getItem(THEME_KEY);
    if (localTheme != null) {
      setTheme(JSON.parse(localTheme));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(THEME_KEY, JSON.stringify(theme));
  }, [theme]);

  return (
    <div>
      <themeContext.Provider value={{ setTheme, theme }}>
        <Navbar />
        <Content />
      </themeContext.Provider>
    </div>
  );
}
