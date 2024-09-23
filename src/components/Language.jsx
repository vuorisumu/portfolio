import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../constants";
import { useEffect } from "react";

function Language() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, []);

  const onChangeLanguage = (e) => {
    document.documentElement.lang = e.target.value;
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select defaultValue={i18n.language} onChange={onChangeLanguage}>
      {LANGUAGES.map(({ code, label }) => (
        <option key={code} value={code}>
          {label}
        </option>
      ))}
    </select>
  );
}

export default Language;
