import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgUnmixed(props) {
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
        d="M18 17.5H5M15.602 21L19 17.5 15.602 14M18 6.5H5M15.602 10L19 6.5 15.602 3"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgUnmixed;
