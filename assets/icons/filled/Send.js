import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSend(props) {
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
        d="M5 15.747V18a1 1 0 001 1h12a1 1 0 001-1v-2.253M12.202 6.33v8.086M15.546 8.267L12.202 5 8.858 8.267"
        stroke={props.color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgSend;
