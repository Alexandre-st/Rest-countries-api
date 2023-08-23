import { useEffect, useState } from "react";
import emptyMoon from "../assets/empty-moon.png";
import moon from "../assets/moon.png";

const Header: React.FC = () => {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    // Add listener to update styles
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (evt) =>
        onSelectMode(evt.matches ? "dark" : "light")
      );

    // Setup dark/light mode for the first time
    onSelectMode(
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    );

    // Remove listener
    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", () => "");
    };
  }, []);

  const onSelectMode = (mode: string) => {
    setMode(mode);
    if (mode === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  return (
    <header className="header">
      <div className="header-container container">
        <h1 className="header-title">Where in the world?</h1>
        {mode === "dark" ? (
          <div className="header-toggle" onClick={() => onSelectMode("light")}>
            <p className="header-toggle-text">Light Mode</p>
            <img src={moon} alt="Pour changer la couleur du thème" />
          </div>
        ) : (
          <div className="header-toggle" onClick={() => onSelectMode("dark")}>
            <p className="header-toggle-text">Dark Mode</p>
            <img src={emptyMoon} alt="Pour changer la couleur du thème" />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
