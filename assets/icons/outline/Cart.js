import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgCart(props) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={10} cy={19} r={1.5} stroke={props.color} />
      <Circle cx={17} cy={19} r={1.5} stroke={props.color} />
      <Path
        d="M3.5 4h2l3.504 11H17"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.224 12.5L6.3 6.5h12.507a.5.5 0 01.475.658l-1.667 5a.5.5 0 01-.474.342H8.224z"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgCart;
