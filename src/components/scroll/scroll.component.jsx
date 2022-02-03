import React from "react";
import "./scroll.styles.scss";

export default function Top() {
  function TopEvent() {
    document.body.scrollTop = 0; //Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("topButton").style.visibility = "visible";
    } else {
      document.getElementById("topButton").style.visibility = "hidden";
    }
  }
  window.onscroll = function () {
    scrollFunction();
  };
  window.onload = function () {
    scrollFunction();
  };

  //To make sure that this button is not visible at starting.
  // When the user clicks on the button, scroll to the top of the document

  return (
    <button onClick={TopEvent} id="topButton" title="top">
      <i className="fas fa-arrow-circle-up" aria-hidden="true"></i>
    </button>
  );
}
