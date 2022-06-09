import * as React from "react";
import Svg, { Rect, Circle } from "react-native-svg";

function SvgPassword(props) {
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
        x={3.5}
        y={7.5}
        width={17}
        height={9}
        rx={0.5}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle
        cx={7}
        cy={12}
        r={1.5}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle
        cx={12}
        cy={12}
        r={1.5}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle
        cx={17}
        cy={12}
        r={1.5}
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgPassword;
