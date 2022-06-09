import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgProxy(props) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 17V7" stroke={props.color} strokeLinecap="round" />
      <Path
        d="M8.934 12H4M6.585 15.061L9.538 12 6.585 8.939M19.395 12h-4.933M17.047 15.061L20 12l-2.953-3.061"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgProxy;
