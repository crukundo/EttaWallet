import * as React from "react";
import Svg, { Rect, Path, Circle } from "react-native-svg";

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
      <Rect
        x={5.5}
        y={5.5}
        width={13}
        height={12.939}
        rx={1}
        stroke={props.color}
      />
      <Rect
        x={7.5}
        y={7.5}
        width={9}
        height={9}
        rx={0.5}
        stroke={props.color}
      />
      <Path
        d="M7 19h2v.578a.422.422 0 01-.422.422H7.422A.422.422 0 017 19.578V19zM15 19h2v.578a.422.422 0 01-.422.422h-1.156a.422.422 0 01-.422-.422V19z"
        fill={props.color}
      />
      <Circle cx={12} cy={12} r={1.75} fill={props.color} />
      <Path
        d="M9.5 9.5l5 5M9.5 14.5l5-5"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgSafe;
