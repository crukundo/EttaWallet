import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgScan(props) {
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
        d="M8.688 4H4v4.688h.938v-3.75h3.75V4zm0 14.063h-3.75v-3.75H4V19h4.688v-.938zm5.624.937v-.938h3.75v-3.75H19V19h-4.688zm0-14.063V4H19v4.688h-.938v-3.75h-3.75z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgScan;
