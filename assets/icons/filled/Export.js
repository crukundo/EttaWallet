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
        d="M11.37 10.384a1.5 1.5 0 000 2.121l.067.067a1.5 1.5 0 002.122 0l3.115-3.115c.144-.144.253-.31.326-.488V17a2 2 0 01-2 2H7a2 2 0 01-2-2V9a2 2 0 012-2h7.851a1.498 1.498 0 00-.365.269l-3.116 3.115z"
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
