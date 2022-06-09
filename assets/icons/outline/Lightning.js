import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLightning(props) {
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
        d="M18.832 10.363L8.945 20.53c-.08.083-.213-.012-.16-.114l3.814-7.527a.1.1 0 00-.09-.146H5.24a.1.1 0 01-.071-.17l9.08-9.2c.078-.078.206.008.163.11l-2.825 6.66a.1.1 0 00.094.14l7.08-.088a.1.1 0 01.072.17z"
        stroke={props.color}
      />
    </Svg>
  );
}

export default SvgLightning;
