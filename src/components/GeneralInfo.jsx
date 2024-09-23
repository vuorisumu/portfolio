import { useTranslation } from "react-i18next";

function GeneralInfo() {
  const { t } = useTranslation();

  return (
    <article>
      <h1>Sumu Vuori</h1>
      <p>{t("title")}</p>
    </article>
  );
}

export default GeneralInfo;
