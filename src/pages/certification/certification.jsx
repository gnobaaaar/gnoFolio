import React from "react";
import FadIn from "react-fade-in";
import "./certification.styles.scss";
import { certification } from "../detail.pages";

function Certification() {
  return (
    <FadIn delay="500">
      <div className="certificate-box">
        <div className="certificate-main" id="certificate">
          <div className="certificate-title">
            <a href="#certificate">
              <h3>CERTIFICATIONS</h3>
            </a>
          </div>
          <div className="certificate-container">
            {certification.certificates.map((item) => {
              return (
                <ul className="certificate-lists" key={item.cerId}>
                  <a href={item.cerUrl} target="_blank">
                    <li className="certificate-div">
                      <div className="certificate-img">
                        <img src={item.cerImg} alt="" />
                      </div>
                      <div className="certificate-name">{item.cerName}</div>
                      <div className="certificate-publisher">
                        {item.cerPublisher}
                      </div>
                    </li>
                  </a>
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    </FadIn>
  );
}

export default Certification;
