import { useEffect, useState } from "react";

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
      <div className="container">
        <h1>Where in the world?</h1>
        {mode === "dark" ? (
          <div className="header-toggle" onClick={() => onSelectMode("light")}>
            <p>LIGHT</p>
            {/* <img src={sun} alt="Soleil pour changer la couleur du thème" /> */}
          </div>
        ) : (
          <div className="header-toggle" onClick={() => onSelectMode("dark")}>
            <p>DARK</p>
            {/* <img src={moon} alt="Lune pour changer la couleur du thème" /> */}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
