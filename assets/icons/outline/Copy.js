import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function SvgCopy(props) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect
        x={6.5}
        y={6.5}
        width={9}
        height={13}
        rx={1.5}
        stroke={props.color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 4a2 2 0 00-2 2v.5h1V6a1 1 0 011-1h6a1 1 0 011 1v10a1 1 0 01-1 1h-.5v1h.5a2 2 0 002-2V6a2 2 0 00-2-2h-6z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgCopy;
