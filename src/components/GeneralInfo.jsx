import { useTranslation } from "react-i18next";

function GeneralInfo() {
  const { t } = useTranslation();

  return (
    <article id="info">
      <div id="infoContainer">
        <img src="/sumu.jpg" />
        <h1>Sumu Vuori</h1>
        <p>{t("title")}</p>
      </div>
    </article>
  );
}

export default GeneralInfo;
