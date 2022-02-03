import React from "react";
import "./skills.styles.scss";

import { skills } from "../../pages/detail.pages";
import FadeIn from "react-fade-in";
import Softskills from "../../components/softskills/softskills.component";

function Skills() {
  return (
    <FadeIn delay="300">
      <div className="skills-container" id="skills">
        <div className="skills-text-section">
          <a href="#skills">
            <h1 className="skills-title">{skills.title}</h1>
          </a>
        </div>
        <Softskills />
      </div>
    </FadeIn>
  );
}

export default Skills;
