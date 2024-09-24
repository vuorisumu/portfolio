import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  return (
    <article id="contact">
      <h2>{t("contact")}</h2>
      <img src="/sumu.jpg" />
      <h3>Sumu Vuori</h3>
      <p>
        <span className="material-symbols-outlined">mail</span>
        vuori.sumu[at]gmail.com
      </p>
      <p>
        <span className="material-symbols-outlined">call</span> 0449884833
      </p>
      <p>
        <a
          href="https://www.linkedin.com/in/sumu-vuori-515aa92a1/"
          target="_blank"
        >
          LinkedIn
        </a>
      </p>
      <p>
        <a href="https://github.com/vuorisumu" target="_blank">
          GitHub
        </a>
      </p>
    </article>
  );
}

export default Contact;
