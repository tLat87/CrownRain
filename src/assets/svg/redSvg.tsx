import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = ({ width = 182, height = 182, ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}   // Размеры теперь можно передавать
    height={height}
    fill="none"
    {...props}
  >
    <Path
      stroke="red"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={8}
      d="m175.5 6.5-169 169m0-169 169 169"
    />
  </Svg>
);

export default SvgComponent;
