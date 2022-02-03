import React from "react";
import "./experiences.styles.scss";

import FadeIn from "react-fade-in";
import { exps } from "../detail.pages";
import emoji from "react-easy-emoji";

function Experiences() {
  return (
    <FadeIn delay="450">
      <div className="exp-container" id="experience">
        <div className="exp-main">
          <div className="exp-header">
            <a href="#experience">
              <h1 className="exp-title">{exps.title}</h1>
            </a>
            <div className="exp-subTitle">
              {exps.subTitle} {emoji("😭")}
            </div>
          </div>
          <div className="exp-list"></div>
        </div>
      </div>
    </FadeIn>
  );
}

export default Experiences;
