import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgClearCharacter(props) {
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
        d="M8 5a.53.53 0 00-.431.222l-3.923 5.486a1.641 1.641 0 00-.047 1.839L7.58 18.77c.092.143.25.23.42.23h11.359c.906 0 1.641-.735 1.641-1.641V6.64C21 5.735 20.265 5 19.359 5H8zm1.646 3.146a.5.5 0 01.708 0l3.127 3.128 3.094-3.126a.5.5 0 01.71.704l-3.097 3.129 3.166 3.165a.5.5 0 01-.708.708l-3.162-3.163-3.129 3.16a.5.5 0 01-.71-.703l3.132-3.164-3.13-3.13a.5.5 0 010-.708z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgClearCharacter;
