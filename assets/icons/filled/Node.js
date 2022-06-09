import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

function SvgNode(props) {
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
        strokeWidth={1.5}
        d="M5.565 12L12 5.566 18.434 12 12 18.435z"
      />
      <Circle cx={12} cy={5.5} r={2.5} fill={props.color} />
      <Circle cx={12} cy={18.5} r={2.5} fill={props.color} />
      <Circle cx={5.5} cy={12} r={2.5} fill={props.color} />
      <Circle cx={18.5} cy={12} r={2.5} fill={props.color} />
    </Svg>
  );
}

export default SvgNode;
