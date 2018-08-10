import { StyleSheet } from 'react-native'
import { Fonts, Metrics, Colors } from '../../themes'

export default StyleSheet.create({
  container: {
    justifyContent: 'space-between', 
    flex: 1
  },
  warpImage: {
    marginTop: Metrics.screenHeight / 3 + Metrics.navBarHeight

  },
  warpContent: {
    paddingTop: Metrics.smallMargin,
    marginTop: Metrics.navBarHeight,
    flex: 1,
    borderWidth: 1,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight
  },
  logoXoneFm: {
    height: 100, 
    width: '100%',
  },
  warpPlay: {
    width: Metrics.screenWidth,
    height: 100,
  }
})