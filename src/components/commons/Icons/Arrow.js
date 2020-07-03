import React from "react";

export const Arrow = ({ width, height, fill }) => (
  <svg width={width || "29"} height={height || "29"} xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(1 1)" stroke="#f5c15d" fill={fill || "none"}>
      <path
        strokeWidth="1.82"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.1 12.012l4.095 4.55 4.095-4.55"
      ></path>
      <circle strokeWidth="1.638" cx="13.195" cy="13.195" r="13.195"></circle>
    </g>
  </svg>
);

export default Arrow;
