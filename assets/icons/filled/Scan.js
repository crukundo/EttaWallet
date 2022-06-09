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
        d="M8.688 4H4v4.688h1.875V5.874h2.813V4zm0 13.125H5.874v-2.813H4V19h4.688v-1.875zM14.311 19v-1.875h2.813v-2.813H19V19h-4.688zm0-13.125V4H19v4.688h-1.875V5.874h-2.813z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgScan;
