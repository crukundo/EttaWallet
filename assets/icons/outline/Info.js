import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgInfo(props) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={12} cy={7.25} r={1.25} fill={props.color} />
      <Path fill={props.color} d="M11 10h2v8h-2z" />
    </Svg>
  );
}

export default SvgInfo;
