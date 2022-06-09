import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgShare(props) {
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
        d="M20.5 3.5L3.5 9l6.5 3 7-5-5 7 3 6.5 5.5-17z"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgShare;
