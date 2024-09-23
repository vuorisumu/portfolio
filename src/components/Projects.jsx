import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();
  const projects = t("projects", { returnObjects: true });

  return (
    <article>
      <h2>Projects</h2>

      <ul>
        {projects.map((project, index) => (
          <li key={`project${index}`}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default Projects;
