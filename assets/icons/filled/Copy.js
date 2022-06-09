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
      <Rect x={6} y={6} width={10} height={14} rx={1.5} fill={props.color} />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.064 5.064A1.5 1.5 0 018.5 5h7A1.5 1.5 0 0117 6.5v11a1.5 1.5 0 01-.064.436A1.5 1.5 0 0018 16.5v-11A1.5 1.5 0 0016.5 4h-7a1.5 1.5 0 00-1.436 1.064z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgCopy;
