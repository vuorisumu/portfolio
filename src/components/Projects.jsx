import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();
  const projects = t("projects", { returnObjects: true });
  const [selected, setSelected] = useState({});

  useEffect(() => {
    setSelected(projects[0]);
  }, [projects]);

  return (
    <article>
      <h2>{t("projectTitle")}</h2>

      <div id="projectDisplay">
        <h3>{selected.name}</h3>
        <p>{selected.description}</p>
      </div>

      <ul className="projects">
        {projects.map((project, index) => (
          <li key={`project${index}`}>
            <button onClick={() => setSelected(project)}>
              <h3>{project.name}</h3>
            </button>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default Projects;
