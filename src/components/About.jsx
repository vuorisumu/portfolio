import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  const desc = t("aboutDesc", { returnObjects: true });
  const strengths = t("strengths", { returnObjects: true });
  const skills = t("skills", { returnObjects: true });

  return (
    <article>
      <div id="about">
        <section>
          <h2>{t("about")}</h2>
          {desc.map((d, index) => (
            <p key={`desc${index}`}>{d}</p>
          ))}
        </section>

        <section>
          <h2>{t("strengthsTitle")}</h2>
          <ul>
            {strengths.map((strength, index) => (
              <li key={`str${index}`}>
                <h3>{strength.name}</h3>
                <p>{strength.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>{t("skillsTitle")}</h2>
          <ul className="skills">
            {skills.map((skill, index) => (
              <li key={`skill${index}`}>{skill}</li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}

export default About;
