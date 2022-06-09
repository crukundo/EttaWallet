import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

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
      <Rect x={3} y={7} width={18} height={1} rx={0.5} fill={props.color} />
      <Rect
        x={3}
        y={11.502}
        width={15}
        height={1}
        rx={0.5}
        fill={props.color}
      />
      <Path
        d="M3 16.5a.5.5 0 01.5-.5h17a.5.5 0 010 1h-17a.5.5 0 01-.5-.5z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgMenu;
