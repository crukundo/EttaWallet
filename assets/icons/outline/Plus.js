import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPlus(props) {
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
        d="M12 3.5v17M20.5 12h-17"
        stroke={props.color}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default SvgPlus;
