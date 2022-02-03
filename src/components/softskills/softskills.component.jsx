import React from "react";
import "./softskills.styles.scss";

import { FaDocker, FaHtml5, FaCss3Alt, FaSass, FaGithub } from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiRedux,
  SiAmazonaws,
  SiJirasoftware,
  SiConfluence,
  SiBitbucket,
} from "react-icons/si";
import { DiNodejs, DiNginx, DiDjango, DiPython, DiGit } from "react-icons/di";

export default function Softskills() {
  return (
    <div className="softskills-container">
      <ul className="softskills-font">
        <li className="skill-icon html5">
          <FaHtml5 />
        </li>
        <li className="skill-icon css3">
          <FaCss3Alt />
        </li>
        <li className="skill-icon javascript">
          <SiJavascript />
        </li>
        <li className="skill-icon react">
          <SiReact />
        </li>
        <li className="skill-icon sass">
          <FaSass />
        </li>
        <li className="skill-icon redux">
          <SiRedux />
        </li>
      </ul>
      <ul className="softskills-back">
        <li className="skill-icon nodejs">
          <DiNodejs />
        </li>
        <li className="skill-icon nginx">
          <DiNginx />
        </li>
        <li className="skill-icon django">
          <DiDjango />
        </li>
        <li className="skill-icon python">
          <DiPython />
        </li>
        <li className="skill-icon amazon">
          <SiAmazonaws />
        </li>
        <li className="skill-icon docker">
          <FaDocker />
        </li>
      </ul>
      <ul className="softskills-ect">
        <li className="skill-icon git">
          <DiGit />
        </li>
        <li className="skill-icon github">
          <FaGithub />
        </li>
        <li className="skill-icon jira">
          <SiJirasoftware />
        </li>
        <li className="skill-icon confluence">
          <SiConfluence />
        </li>
        <li className="skill-icon bitbucket">
          <SiBitbucket />
        </li>
      </ul>
    </div>
  );
}
