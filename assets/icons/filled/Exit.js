import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgExit(props) {
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
        d="M19.285 12h-8.012M16.51 15.636L20 12l-3.49-3.636M13.454 7V4H4v16h9.454v-3"
        stroke={props.color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgExit;
