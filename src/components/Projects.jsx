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

      <div id="projects">
        <div id="projectDisplay">
          <h3>{selected.name}</h3>
          <p>{selected.description}</p>
        </div>

        <ul className="projectButtons">
          {projects.map((project, index) => (
            <li key={`project${index}`}>
              <button onClick={() => setSelected(project)}>
                <div className="imageHolder">
                  <img src="/placeholder.png" />
                </div>
                <h3 className={selected === project ? "active" : ""}>
                  {project.name}
                </h3>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default Projects;
