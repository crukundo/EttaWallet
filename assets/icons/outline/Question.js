import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgQuestion(props) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path fill={props.color} d="M10.75 15.75h2.5v2.5h-2.5z" />
      <Path
        d="M9 10c0-1.358 1.15-3 3-3s3 1.596 3 3c0 2.175-3 2.059-3 4.5"
        stroke={props.color}
        strokeWidth={2}
      />
    </Svg>
  );
}

export default SvgQuestion;
