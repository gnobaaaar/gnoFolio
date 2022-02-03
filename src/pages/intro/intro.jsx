import React from "react";
import FadeIn from "react-fade-in";
import "./intro.styles.scss";

import { intro } from "../detail.pages";
import emoji from "react-easy-emoji";
import SocialLink from "../../components/SocialLink/SocialLink.component";

function Intro() {
  return (
    <FadeIn delay="100">
      <div>
        <div className="intro-container">
          <div className="intro-main">
            <div className="intro-text-section">
              <div>
                <h1 className="intro-text-title">{intro.title}</h1>
                <p className="intro-text-subTitle">
                  {intro.subTitle} {emoji("🤣")}
                </p>
              </div>
              <div>
                <p className="intro-story">{intro.story}</p>
              </div>
              <SocialLink />
            </div>
            <div className="Intro-image-section">
              <img
                src="https://images.unsplash.com/photo-1634838167859-f6af368a4831?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80"
                alt="coding-cat"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export default Intro;
