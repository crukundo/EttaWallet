import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLock(props) {
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
        d="M6 9a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2H6zm6 8a2 2 0 100-4 2 2 0 000 4z"
        fill={props.color}
      />
      <Path
        d="M7.75 10.75h8.5v-5a2 2 0 00-2-2h-4.5a2 2 0 00-2 2v5z"
        stroke={props.color}
        strokeWidth={1.5}
      />
    </Svg>
  );
}

export default SvgLock;
