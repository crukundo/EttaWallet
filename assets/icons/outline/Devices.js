import * as React from "react";
import Svg, { Rect } from "react-native-svg";

function SvgDevices(props) {
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
        x={7.5}
        y={4.5}
        width={9}
        height={15}
        rx={1.5}
        stroke={props.color}
      />
      <Rect
        x={9.5}
        y={6.5}
        width={5}
        height={5}
        rx={0.75}
        stroke={props.color}
      />
      <Rect
        width={1.5}
        height={1}
        rx={0.5}
        transform="matrix(1 0 0 -1 9.5 14.5)"
        stroke={props.color}
      />
      <Rect
        width={1.5}
        height={1}
        rx={0.5}
        transform="matrix(1 0 0 -1 13 14.5)"
        stroke={props.color}
      />
    </Svg>
  );
}

export default SvgDevices;
