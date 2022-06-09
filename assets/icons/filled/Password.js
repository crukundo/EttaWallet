import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPassword(props) {
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
        d="M3.91 8a.91.91 0 00-.91.91v6.18c0 .503.407.91.91.91h16.18a.91.91 0 00.91-.91V8.91a.91.91 0 00-.91-.91H3.91zM7 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm6.5-1.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.5 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgPassword;
