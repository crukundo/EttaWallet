import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgEdit(props) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.995 17.207V19.5a.5.5 0 00.5.5h2.298a.5.5 0 00.353-.146l9.448-9.448-3-3-9.452 9.448a.5.5 0 00-.147.353zm10.837-11.04l3 3 1.46-1.46a1 1 0 000-1.414l-1.585-1.586a1 1 0 00-1.414 0l-1.46 1.46z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgEdit;
