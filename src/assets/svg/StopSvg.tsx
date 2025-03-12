import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={44}
    height={44}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M25.667 34.833H33V9.167h-7.333M11 34.833h7.333V9.167H11v25.666Z"
    />
  </Svg>
)
export default SvgComponent
