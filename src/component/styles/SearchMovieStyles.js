import { StyleSheet } from 'react-native'
import { Fonts, Metrics, Colors } from '../../themes'

export default StyleSheet.create({
  container: {

  },
  cardView: {
    marginVertical: Metrics.smallMargin,
    marginHorizontal: Metrics.smallMargin,
    borderRadius: 4,
    width: Metrics.screenWidth / 2 - 20
    // flexDirection: 'row'
  },
  imgMovie: {
    height: 100,
    width: '100%'
  }
})