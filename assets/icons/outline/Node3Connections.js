import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

function SvgNode3Connections(props) {
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
        d="M12.975 7.247a2.01 2.01 0 00.723-.69l3.745 3.745a2.01 2.01 0 00-.69.723l-3.778-3.778zm3.778 5.728l-3.778 3.778c.295.165.545.404.723.69l3.745-3.745a2.009 2.009 0 01-.69-.723zm-5.728 3.778l-3.778-3.778a2.01 2.01 0 01-.69.723l3.745 3.745a2.01 2.01 0 01.723-.69zm0-9.506l-3.778 3.778a2.01 2.01 0 00-.69-.723l3.745-3.745c.178.286.428.525.723.69z"
        fill={props.color}
      />
      <Circle cx={12} cy={5.5} r={2} stroke={props.color} />
      <Circle cx={18.5} cy={12} r={0.75} fill={props.color} />
      <Circle cx={12} cy={18.5} r={2} stroke={props.color} />
      <Circle cx={5.5} cy={12} r={2} stroke={props.color} />
      <Circle cx={18.5} cy={12} r={2} stroke={props.color} />
      <Circle cx={5.5} cy={12} r={0.75} fill={props.color} />
      <Circle cx={12} cy={18.5} r={0.75} fill={props.color} />
    </Svg>
  );
}

export default SvgNode3Connections;
