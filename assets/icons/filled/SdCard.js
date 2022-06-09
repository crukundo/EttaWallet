import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSdCard(props) {
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
        d="M6 9l5-5h5.5A1.5 1.5 0 0118 5.5v13a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 016 18.5V9zm9.75-3a.75.75 0 00-.75.75v2.5a.75.75 0 001.5 0v-2.5a.75.75 0 00-.75-.75zM13 6.75a.75.75 0 011.5 0v2.5a.75.75 0 01-1.5 0v-2.5zM11.75 6a.75.75 0 00-.75.75v2.5a.75.75 0 001.5 0v-2.5a.75.75 0 00-.75-.75z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgSdCard;
