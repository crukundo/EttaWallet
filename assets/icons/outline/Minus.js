import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMinus(props) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M19.5 12h-15" stroke={props.color} strokeLinecap="round" />
    </Svg>
  );
}

export default SvgMinus;
