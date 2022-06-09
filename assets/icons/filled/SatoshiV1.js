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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zM8.693 8.742l7.637 2.063.337-1.462L9.029 7.28l-.336 1.462zm5.526-3.05l-.406 1.774-1.448-.392.407-1.774 1.447.392zM11.227 18.7l.408-1.774-1.448-.391-.408 1.774 1.448.391zm4.421-4.934L8.011 11.7l.336-1.462 7.637 2.066-.336 1.462zm-8.316.89l7.638 2.064.336-1.462-7.638-2.064-.336 1.462z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgSatoshiV1;
