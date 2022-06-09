import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCross(props) {
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
        d="M6 6l12 12M18 6L6 18"
        stroke={props.color}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default SvgCross;
