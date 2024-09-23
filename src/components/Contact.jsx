import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  return (
    <article id="contact">
      <h2>{t("contact")}</h2>
    </article>
  );
}

export default Contact;
