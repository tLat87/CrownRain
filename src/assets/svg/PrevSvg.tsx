import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={35}
    fill="none"
    viewBox="0 0 18 35"
    {...props}
  >
    <Path
      fill="#000"
      d="M1 10.207 3.38 8l12.96 12.026c.21.193.375.422.489.674a1.944 1.944 0 0 1 0 1.593 2.07 2.07 0 0 1-.488.675L3.38 35l-2.378-2.207L13.167 21.5 1 10.207Z"
      transform="scale(-1,1) translate(-18,0)"
    />
  </Svg>
);

export default SvgComponent;
