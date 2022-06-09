import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSatoshiV1(props) {
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
        d="M12 20.5a8.5 8.5 0 100-17 8.5 8.5 0 000 17zM8.86 8.011l7.639 2.063M13.089 7.27l.406-1.774M10.503 18.504l.408-1.773M8.18 10.969l7.636 2.066M7.5 13.925l7.638 2.064"
        stroke={props.color}
      />
    </Svg>
  );
}

export default SvgSatoshiV1;
