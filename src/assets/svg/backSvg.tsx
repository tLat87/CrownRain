import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={34}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#000"
        d="M10.143 15.543a9.916 9.916 0 0 1 17.482 6.415 2.125 2.125 0 0 0 4.25 0c0-7.824-6.342-14.166-14.167-14.166A14.124 14.124 0 0 0 7.2 12.459l-.492-2.783a2.125 2.125 0 1 0-4.185.736L4 18.785a2.12 2.12 0 0 0 .874 1.371c.571.4 1.324.489 1.962.286l7.996-1.41a2.125 2.125 0 1 0-.737-4.185l-3.95.695v.002Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h34v34H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
