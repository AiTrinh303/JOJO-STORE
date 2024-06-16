import { useContext } from "react";
import LightButton from "../assets/light-mode-button.png";
import DarkButton from "../assets/dark-mode-button.png";
import { useTheme } from "../Context/ThemeContext";

const DarkMode = () => {
  const { theme, toggleTheme } = useTheme();


  return (
    <div className="relative">
      <img
        src={LightButton}
        alt="Switch to dark mode"
        onClick={toggleTheme}
        className={`custom-darkmode-button ${theme === "light" ? "opacity-100" : "hidden-button"} absolute right-0 z-10`}
      />
      <img
        src={DarkButton}
        alt="Switch to light mode"
        onClick={toggleTheme}
        className={`custom-darkmode-button ${theme === "dark" ? "opacity-100" : "hidden-button"} absolute right-0 z-10`}
      />
    </div>
  );
};

export default DarkMode;
