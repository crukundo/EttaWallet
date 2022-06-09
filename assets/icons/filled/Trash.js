import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTrash(props) {
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
        d="M6 6.91h12"
        stroke={props.color}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <Path
        d="M14.667 6.91V6a2 2 0 00-2-2h-1.334a2 2 0 00-2 2v.91"
        stroke={props.color}
        strokeWidth={1.5}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 6.91L8 20h8l2-13.09H6zm6.5 3.635a.5.5 0 00-1 0v5.819a.5.5 0 101 0v-5.819zm-3.224-.499a.477.477 0 01.55.423l.666 5.818a.525.525 0 01-.435.576.477.477 0 01-.549-.423l-.667-5.818a.525.525 0 01.435-.576zm5.883.576a.525.525 0 00-.435-.576.477.477 0 00-.55.423l-.666 5.818a.525.525 0 00.435.576.476.476 0 00.549-.423l.666-5.818z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgTrash;
