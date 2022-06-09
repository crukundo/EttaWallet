import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFile(props) {
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
        d="M13 4H7.5A1.5 1.5 0 006 5.5v13A1.5 1.5 0 007.5 20h9a1.5 1.5 0 001.5-1.5V9h-.004L13 4zm-1 1.604V9.75c0 .138.112.25.25.25h4.146a.25.25 0 00.177-.427l-4.146-4.146a.25.25 0 00-.427.177z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgFile;
