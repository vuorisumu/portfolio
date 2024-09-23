import { useTranslation } from "react-i18next";

function GeneralInfo() {
  const { t } = useTranslation();

  return (
    <article>
      <div id="info">
        <img src="/placeholder.png" />
        <h1>Sumu Vuori</h1>
        <p>{t("title")}</p>
      </div>
    </article>
  );
}

export default GeneralInfo;
