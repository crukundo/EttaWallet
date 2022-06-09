import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCaretUp(props) {
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
        d="M4.99976 14.071L11.3637 7.70708C11.7542 7.31656 12.3874 7.31656 12.7779 7.70708L19.1419 14.071"
        stroke={props.color}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default SvgCaretUp;
