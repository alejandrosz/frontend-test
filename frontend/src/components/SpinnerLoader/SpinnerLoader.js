import React from "react";
var Loader = require("react-loader");

const SpinnerLoader = () => {
  var opts = {
    lines: 13,
    length: 62,
    width: 19,
    radius: 39,
    scale: 0.2,
    corners: 1,
    color: "#ffffff",
    fadeColor: "transparent",
    speed: 0.8,
    rotate: 0,
    animation: "spinner-line-fade-default",
    direction: 1,
    zIndex: 2e9,
    className: "spinner",
    top: "48%",
    left: "50%",
    shadow: "0 0 5px black",
    position: "absolute"
  };

  return <div data-testid="loader"><Loader loaded={false} options={opts}></Loader></div>;
};

export default SpinnerLoader;
