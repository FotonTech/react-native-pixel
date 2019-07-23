import { scale } from 'react-native-size-matters'
import { PixelRatio } from 'react-native'

const numberToThemeFontSize = (n) => `_${n}`

const fontSizes = (n) => Array(n || 445)
  .fill(0)
  .reduce(
    (acc, _, n) => ({
      ...acc,
      [numberToThemeFontSize(n + 1)]: PixelRatio.roundToNearestPixel(scale(n + 1)),
    }),
    {},
  )

export default fontSizes;