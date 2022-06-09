import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLightning(props) {
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
        d="M19 10.19L8.488 21l4.185-8.258H5L14.616 3l-3.09 7.284L19 10.19z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgLightning;
