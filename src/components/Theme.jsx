import { useEffect, useState } from "react";

function Theme() {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const prevTheme = localStorage.getItem("theme");

    if (prevTheme) {
      setTheme(prevTheme);
    } else {
      const lightPref = window.matchMedia("(prefers-color-scheme: light)");
      setTheme(lightPref.matches ? "light" : "dark");
    }
  }, []);

  const setTheme = (themeName) => {
    document.documentElement.setAttribute("data-theme", themeName);
    localStorage.setItem("theme", themeName);
    setDarkTheme(themeName === "dark");
  };

  const handleThemeToggle = () => {
    setTheme(darkTheme ? "light" : "dark");
  };

  return (
    <div className="toggle">
      <input
        type="checkbox"
        name="toggleTheme"
        id="toggleTheme"
        className="menu"
        checked={darkTheme}
        onChange={handleThemeToggle}
      />
      <label htmlFor="toggleTheme"></label>
    </div>
  );
}

export default Theme;
