import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgUsb(props) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M7.5 7h9v9.5a4.5 4.5 0 11-9 0V7z" fill={props.color} />
      <Path stroke={props.color} d="M9.5 3.5h5v4h-5z" />
    </Svg>
  );
}

export default SvgUsb;
