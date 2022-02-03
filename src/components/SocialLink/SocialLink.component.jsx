import React from "react";
import "./SocialLink.styles.scss";
import { sociallink } from "../../pages/detail.pages";
import { ReactComponent as Tstory } from "../../assets/img/tistory-logo-fill.svg";

export default function SocialLink() {
  return (
    <div className="socailContainer">
      <a
        href={sociallink.github}
        className="icon-button github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github"></i>
        <span></span>
      </a>
      <a
        href={sociallink.linkedin}
        className="icon-button linkedin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin-in"></i>
        <span></span>
      </a>
      <a
        href={sociallink.tstory}
        className="icon-button twitter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Tstory className="tstory" />
        <span></span>
      </a>
      <a
        href={sociallink.medium}
        className="icon-button medium"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-medium"></i>
        <span></span>
      </a>
      <a
        href={`mailto:${sociallink.gmail}`}
        className="icon-button google"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fas fa-envelope"></i>
        <span></span>
      </a>
    </div>
  );
}
