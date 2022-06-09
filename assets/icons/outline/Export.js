import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgExport(props) {
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
        d="M16 12.292V17a1 1 0 01-1 1H7a1 1 0 01-1-1V9a1 1 0 011-1h4.807l1-1H7a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-5.708l-1 1z"
        fill={props.color}
      />
      <Path
        d="M12.5 11.5l6.364-6.364M14.5 4.5h5v5"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgExport;
