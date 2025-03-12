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
      d="M28.963 5.62v7.342c0 .995.396 1.95 1.103 2.655a3.778 3.778 0 0 0 2.666 1.1h8.422"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
      d="M15.613 15.613h6.666M15.613 24.5h17.774m-17.774 8.887h17.774m7.957-15.894v17.493a8.68 8.68 0 0 1-2.781 6.064 8.739 8.739 0 0 1-6.272 2.327H16.795a8.78 8.78 0 0 1-6.33-2.295 8.698 8.698 0 0 1-2.809-6.096V14.01a8.677 8.677 0 0 1 2.781-6.064 8.739 8.739 0 0 1 6.272-2.327h11.666c1.781-.007 3.5.652 4.82 1.847l6.044 5.558a6.062 6.062 0 0 1 2.105 4.469Z"
    />
  </Svg>
)
export default SvgComponent
