import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSnowflake(props) {
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
        d="M12 4v16M20 12H4M18.5 8.486l-3.5 3.5 3.5 3.5M5.5 15.486l3.5-3.5-3.5-3.5M15.5 18.486l-3.5-3.5-3.5 3.5M8.5 5.486l3.5 3.5 3.5-3.5"
        stroke={props.color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgSnowflake;
