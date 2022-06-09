import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLink(props) {
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
        d="M7.05 11.293L4.93 13.414a4 4 0 005.657 5.657l2.828-2.828a4 4 0 000-5.657l-1.06 1.06a2.5 2.5 0 010 3.536L9.524 18.01a2.5 2.5 0 01-3.536-3.535l2.122-2.121-1.06-1.061z"
        fill={props.color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.889 11.646l2.121-2.12a2.5 2.5 0 00-3.535-3.536l-2.829 2.828a2.5 2.5 0 000 3.536l-1.06 1.06a4 4 0 010-5.657l2.828-2.828a4 4 0 015.657 5.657l-2.121 2.121-1.061-1.06z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgLink;
