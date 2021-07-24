import { useContext } from "react";
import { themeContext } from "../App";

export default function Navbar() {
  const { theme } = useContext(themeContext);
  return (
    <div className="navbar">
      {theme ? (
        <img src="/images/bg-desktop-dark.jpg" alt="Background" />
      ) : (
        <img src="/images/bg-desktop-light.jpg" alt="background" />
      )}
    </div>
  );
}
