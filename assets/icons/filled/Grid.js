import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgGrid(props) {
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
        d="M5 10.2V5.8a.8.8 0 01.8-.8h4.4a.8.8 0 01.8.8v4.4a.8.8 0 01-.8.8H5.8a.8.8 0 01-.8-.8zM13 10.2V5.8a.8.8 0 01.8-.8h4.4a.8.8 0 01.8.8v4.4a.8.8 0 01-.8.8h-4.4a.8.8 0 01-.8-.8zM13 18.2v-4.4a.8.8 0 01.8-.8h4.4a.8.8 0 01.8.8v4.4a.8.8 0 01-.8.8h-4.4a.8.8 0 01-.8-.8zM5 18.2v-4.4a.8.8 0 01.8-.8h4.4a.8.8 0 01.8.8v4.4a.8.8 0 01-.8.8H5.8a.8.8 0 01-.8-.8z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgGrid;
