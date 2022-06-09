import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

function SvgSafe(props) {
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
        d="M6 5a1 1 0 00-1 1v11.935a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1H6zm1.5 2a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h9a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5h-9z"
        fill={props.color}
      />
      <Path
        d="M7 19h2v.578a.422.422 0 01-.422.422H7.422A.422.422 0 017 19.578V19zM15 19h2v.578a.422.422 0 01-.422.422h-1.156a.422.422 0 01-.422-.422V19z"
        fill={props.color}
      />
      <Circle cx={12} cy={12} r={2} fill={props.color} />
      <Path
        d="M9 9l6 6M9 15l6-6"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgSafe;
