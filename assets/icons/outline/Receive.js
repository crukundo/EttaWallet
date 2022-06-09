import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgReceive(props) {
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
        d="M5 15.747V18a1 1 0 001 1h12a1 1 0 001-1v-2.253M12.202 13.5V5M15.546 11.15l-3.344 3.266-3.344-3.266"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgReceive;
