import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgClock(props) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-8.5-.207V6.97a.5.5 0 10-1 0v5.015a.498.498 0 00.146.369l2.829 2.828a.5.5 0 10.707-.707L12.5 11.793z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgClock;
