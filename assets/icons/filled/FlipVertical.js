import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFlipVertical(props) {
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
        d="M7.5 17.611V5M4 15.602L7.5 19l3.5-3.398M16.5 6.389V19M13 8.398L16.5 5 20 8.398"
        stroke={props.color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgFlipVertical;
