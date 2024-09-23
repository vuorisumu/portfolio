import { useTranslation } from "react-i18next";

function Cv() {
  const { t } = useTranslation();
  const experience = t("experience", { returnObjects: true });

  return (
    <article>
      <ul>
        {experience.map((expField) => (
          <li key={`expField${expField.name}`}>
            <h2>{expField.name}</h2>
            <ul>
              {expField.contents.map((exp, index) => (
                <li key={`${expField.name}${index}`}>
                  <h3>{exp.name}</h3>
                  <p>{exp.description}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default Cv;
