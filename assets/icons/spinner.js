import React from "react";

function Spinner(props) {
  return (
    <svg
      width="100"
      height="100"
      display="block"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 100 100"
      {...props}
    >
      <path fill="#dedede" d="M10 50a40 40 0 0080 0 40 42 0 01-80 0">
        <animateTransform
          attributeName="transform"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          type="rotate"
          values="0 50 51;360 50 51"
        ></animateTransform>
      </path>
    </svg>
  );
}

export default Spinner;
