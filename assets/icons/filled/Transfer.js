import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTransfer(props) {
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
        d="M4 15.993V19a1 1 0 001 1h14a1 1 0 001-1v-3.007M19.352 11.436l-3.047 3.198-3.048-3.198"
        stroke={props.color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.4 13.958V8.952A4.952 4.952 0 0111.352 4v0a4.952 4.952 0 014.953 4.952v5.006"
        stroke={props.color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgTransfer;
