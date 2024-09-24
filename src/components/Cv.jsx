import { useTranslation } from "react-i18next";

function Cv() {
  const { t } = useTranslation();
  const experience = t("experience", { returnObjects: true });

  return (
    <article id="experience">
      {experience.map((expField) => (
        <section key={`expField${expField.name}`}>
          <h2>{expField.name}</h2>
          <ul>
            {expField.contents.map((exp, index) => (
              <li key={`${expField.name}${index}`}>
                <h3>{exp.name}</h3>
                <p>{exp.time}</p>
                <p>{exp.description}</p>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </article>
  );
}

export default Cv;
