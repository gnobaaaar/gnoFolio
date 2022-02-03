import React from "react";
import "./button.styles.scss";

export default function Button({ text, className, href, newTab }) {
  return (
    <div className={className}>
      <a className="btn btn--stripe" href={href} target={newTab && "_blank"}>
        {text}
      </a>
    </div>
  );
}
