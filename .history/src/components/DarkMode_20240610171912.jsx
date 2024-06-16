import { useContext } from "react";
import LightButton from "../assets/light-mode-button.png";
import DarkButton from "../assets/dark-mode-button.png";
import { ThemeContext } from "../Context/";

const DarkMode = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="relative">
      {theme === "light" ? (
        <img
          src={LightButton}
          alt="Switch to dark mode"
          onClick={toggleTheme}
          className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10"
        />
      ) : (
        <img
          src={DarkButton}
          alt="Switch to light mode"
          onClick={toggleTheme}
          className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10"
        />
      )}
    </div>
  );
};

export default DarkMode;
