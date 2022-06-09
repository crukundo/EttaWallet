import * as React from "react";
import Svg, { Circle, Rect } from "react-native-svg";

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
      <Circle cx={12} cy={12} r={8.5} stroke={props.color} />
      <Rect
        x={12.5}
        y={12.47}
        width={1}
        height={6}
        rx={0.5}
        transform="rotate(-180 12.5 12.47)"
        fill={props.color}
      />
      <Rect
        x={11.293}
        y={12}
        width={1}
        height={5}
        rx={0.5}
        transform="rotate(-45 11.293 12)"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgClock;
