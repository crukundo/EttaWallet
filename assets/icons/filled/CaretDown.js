import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCaretDown(props) {
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
        d="M5 9.929l6.364 6.364a1 1 0 001.414 0l6.364-6.364"
        stroke={props.color}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default SvgCaretDown;
