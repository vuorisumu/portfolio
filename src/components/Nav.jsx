import { HashLink as Link } from "react-router-hash-link";
import Language from "./Language";
import Theme from "./Theme";
import { useTranslation } from "react-i18next";

function Nav() {
  const { t } = useTranslation();

  return (
    <div>
      <ul>
        <li>
          <Link to="/#about">{t("about")}</Link>
        </li>
        <li>
          <Link to="/#projects">{t("projectTitle")}</Link>
        </li>
        <li>
          <Link to="/#experience">{t("experienceTitle")}</Link>
        </li>
        <li>
          <Link to="/#contact">{t("contact")}</Link>
        </li>
      </ul>

      <ul>
        <li>
          <Language />
        </li>
        <li>
          <Theme />
        </li>
      </ul>
    </div>
  );
}

export default Nav;
