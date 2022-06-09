import * as React from "react";
import Svg, { Rect } from "react-native-svg";

function SvgMenu(props) {
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
        x={3}
        y={7.001}
        width={18}
        height={1.5}
        rx={0.75}
        fill={props.color}
      />
      <Rect
        x={3}
        y={11.251}
        width={15}
        height={1.5}
        rx={0.75}
        fill={props.color}
      />
      <Rect
        x={3}
        y={15.499}
        width={18}
        height={1.5}
        rx={0.75}
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgMenu;
