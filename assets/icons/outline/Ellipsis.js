import * as React from "react";
import Svg, { Circle } from "react-native-svg";

function SvgEllipsis(props) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={7} cy={12} r={1.5} fill={props.color} />
      <Circle cx={12.5} cy={12} r={1.5} fill={props.color} />
      <Circle cx={18} cy={12} r={1.5} fill={props.color} />
    </Svg>
  );
}

export default SvgEllipsis;
