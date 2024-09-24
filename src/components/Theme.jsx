import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function Theme() {
  const [darkTheme, setDarkTheme] = useState(false);
  const { t } = useTranslation();

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
      <span className="tooltip">
        {darkTheme ? t("switchToLight") : t("switchToDark")}
      </span>
    </div>
  );
}

export default Theme;
