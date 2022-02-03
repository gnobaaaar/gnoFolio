import React from "react";
import "./footer.styles.scss";
import { footer } from "../../pages/detail.pages";
import SocialLink from "../SocialLink/SocialLink.component";
import { GoLocation } from "react-icons/go";

function Footer() {
  return (
    <div className="footer-box" id="footer">
      <div className="footer-container">
        <div className="footer-text-div">
          <a href="#footer">
            <div className="footer-title">{footer.title}</div>
          </a>
          <div className="footer-subTitle">{footer.subTitle}</div>
          <div className="footer-loc">
            <p className="footer-loc-icon">
              <GoLocation />
            </p>
            <div className="footer-location">{footer.location}</div>
          </div>
          <SocialLink />
        </div>
        <div className="footer-img">
          <div className="footer-img-div">
            <div className="success circle"></div>
            <img src={footer.img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
