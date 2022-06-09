import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMixed(props) {
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
        d="M4 16.8c6.708.082 6.496-10.932 15.96-9.4M16.57 4L20 7.44l-3.432 3.44M16.57 13.2l3.39 3.6-3.39 3.2M4 7.2c6.887-.124 6.381 11.044 15.56 9.6"
        stroke={props.color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgMixed;
