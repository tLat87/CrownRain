import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={45}
    height={45}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M30 16.5v1.755a4.5 4.5 0 0 1 3 4.245v9a4.5 4.5 0 0 1-4.5 4.5h-12a4.5 4.5 0 0 1-4.5-4.5v-9a4.5 4.5 0 0 1 3-4.245V16.5a7.5 7.5 0 0 1 15 0Zm-12 0a4.5 4.5 0 1 1 9 0V18h-9v-1.5Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default SvgComponent
