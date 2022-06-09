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
      <Path
        d="M8 7.5h8v9a4 4 0 01-4 4v0a4 4 0 01-4-4v-9zM9.5 3.5h5v4h-5z"
        stroke={props.color}
      />
    </Svg>
  );
}

export default SvgUsb;
