import React from "react";
import FadeIn from "react-fade-in";
import "./project.styles.scss";
import emoji from "react-easy-emoji";
import Button from "../../components/button/button.component";

import { skills, sociallink } from "../../pages/detail.pages";

function Projects() {
  return (
    <FadeIn delay="450">
      <div className="project" id="projects">
        <div className="projects-main">
          <div className="projects-title">
            <a href="#projects">
              {" "}
              <h3>PROJECTS</h3>
            </a>
          </div>
          <div className="projects-container">
            {skills.project.map((item) => {
              return (
                <div className="projects-section" key={item.projectId}>
                  <a
                    className="project-link"
                    href={item.projectUrl}
                    target="_blank"
                  >
                    <div className="project-section">
                      <span className="project-title">
                        {emoji("💻")} {item.projectName}
                      </span>
                      <div className="project-period">
                        <div>{item.projectPeriod}</div>
                      </div>
                      <div className="project-detail">
                        <div>{item.projectDetail}</div>
                      </div>
                      <div className="project-skills">
                        <div>{item.prjectSkills}</div>
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
            <Button
              text={"To Github"}
              className="project-button"
              href={sociallink.github}
              newTab={true}
            />
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export default Projects;
