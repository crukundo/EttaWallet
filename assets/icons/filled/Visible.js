import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgVisible(props) {
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
        d="M21 12c0 2.761-4.03 5-9 5s-9-2.239-9-5 4.03-5 9-5 9 2.239 9 5zm-5 0a4 4 0 11-8 0 4 4 0 018 0zm-4 2a2 2 0 100-4 2 2 0 000 4z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgVisible;
