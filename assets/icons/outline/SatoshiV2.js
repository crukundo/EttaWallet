import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSatoshiV2(props) {
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
        d="M7 7.91h10M12 5.455V3M12 21v-2.455M7 12h10M7 16.09h10"
        stroke={props.color}
      />
    </Svg>
  );
}

export default SvgSatoshiV2;
