import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={49}
    height={49}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
      d="M21.08 8.814c.87-3.585 5.97-3.585 6.84 0a3.52 3.52 0 0 0 5.253 2.176c3.15-1.919 6.758 1.687 4.839 4.839a3.52 3.52 0 0 0 2.174 5.251c3.585.87 3.585 5.97 0 6.84a3.52 3.52 0 0 0-2.176 5.253c1.919 3.15-1.687 6.758-4.839 4.839a3.52 3.52 0 0 0-5.251 2.174c-.87 3.585-5.97 3.585-6.84 0a3.52 3.52 0 0 0-5.253-2.176c-3.15 1.919-6.758-1.687-4.839-4.839a3.522 3.522 0 0 0-2.174-5.251c-3.585-.87-3.585-5.97 0-6.84a3.52 3.52 0 0 0 2.176-5.253c-1.919-3.15 1.687-6.758 4.839-4.839a3.517 3.517 0 0 0 5.251-2.174Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
      d="M18.375 24.5a6.125 6.125 0 1 0 12.25 0 6.125 6.125 0 0 0-12.25 0Z"
    />
  </Svg>
)
export default SvgComponent
