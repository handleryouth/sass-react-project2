import { useContext } from "react";
import Media from "react-media";
import { themeContext } from "../App";

export default function Navbar() {
  const { theme } = useContext(themeContext);
  return (
    <div className="navbar">
    {/* for mobile needs  */}
      <Media query="(max-width : 768px)">
        {(matches) => {
          return matches ? (
            theme ? (
              <img src="/images/bg-mobile-dark.jpg" alt="Background" />
            ) : (
              <img src="/images/bg-mobile-light.jpg" alt="background" />
            )
          ) : theme ? (
            <img src="/images/bg-desktop-dark.jpg" alt="Background" />
          ) : (
            <img src="/images/bg-desktop-light.jpg" alt="background" />
          );
        }}
      </Media>
    </div>
  );
}
