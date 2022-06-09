import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCaretLeft(props) {
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
        d="M14.071 5l-6.364 6.364a1 1 0 000 1.414l6.364 6.364"
        stroke={props.color}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default SvgCaretLeft;
