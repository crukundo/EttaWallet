import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgConsole(props) {
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
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 19h10.5M3.5 5l7 7-7 7"
      />
    </Svg>
  );
}

export default SvgConsole;
