import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTrash(props) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M6.6 6.91L8.4 20h7.2l1.8-13.09" stroke={props.color} />
      <Path d="M6 6.667h12" stroke={props.color} strokeLinecap="round" />
      <Path
        d="M14.571 7V6a2 2 0 00-2-2H11.43a2 2 0 00-2 2v1"
        stroke={props.color}
      />
      <Path
        d="M11.98 10.546v5.819M9.6 10.546l.6 5.819M14.4 10.546l-.6 5.819"
        stroke={props.color}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default SvgTrash;
