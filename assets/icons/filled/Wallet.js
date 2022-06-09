import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function SvgWallet(props) {
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
        x={12.5}
        y={6.5}
        width={7}
        height={11}
        rx={1}
        stroke={props.color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.5 6A1.5 1.5 0 004 7.5v9A1.5 1.5 0 005.5 18h10a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0015.5 6h-10zm2 7.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgWallet;
