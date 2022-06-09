import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCloud(props) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.5 6a4.502 4.502 0 014.366 3.404 3.5 3.5 0 015.105 2.64A2.5 2.5 0 0118.5 17h-12a3.5 3.5 0 01-1.497-6.665A4.5 4.5 0 019.5 6z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgCloud;
