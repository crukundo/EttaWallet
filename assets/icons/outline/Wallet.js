import * as React from "react";
import Svg, { Path, Rect, Circle } from "react-native-svg";

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
      <Path
        d="M18.005 17H15v1h3.005v-1zm1-1a1 1 0 01-1 1v1a2 2 0 002-2h-1zm0-8v8h1V8h-1zm-1-1a1 1 0 011 1h1a2 2 0 00-2-2v1zM15 7h3.005V6H15v1zm0 0a1 1 0 011 1h1a2 2 0 00-2-2v1zm1 1v8h1V8h-1zm0 8a1 1 0 01-1 1v1a2 2 0 002-2h-1z"
        fill={props.color}
      />
      <Rect
        x={4.5}
        y={6.5}
        width={12}
        height={11}
        rx={1.5}
        stroke={props.color}
      />
      <Circle cx={8.75} cy={11.75} r={1.25} stroke={props.color} />
    </Svg>
  );
}

export default SvgWallet;
