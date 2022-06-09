import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHome(props) {
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
        d="M12.827 3.834a1.5 1.5 0 00-2.26.054L5 10.58V19.5A1.5 1.5 0 006.5 21h1.79a1.5 1.5 0 001.5-1.5v-3.011a1.5 1.5 0 011.5-1.5h1.42a1.5 1.5 0 011.5 1.5V19.5a1.5 1.5 0 001.5 1.5h1.79a1.5 1.5 0 001.5-1.5v-8.92l-6.173-6.746z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgHome;
