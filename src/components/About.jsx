import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <article>
      <h2>{t("about")}</h2>
      <p>{t("aboutDesc")}</p>
    </article>
  );
}

export default About;
