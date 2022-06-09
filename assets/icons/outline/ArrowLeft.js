import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArrowLeft(props) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M21 12.012L3.211 12M9.988 19L3 12l6.988-7"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgArrowLeft;
