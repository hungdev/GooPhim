import { StyleSheet } from 'react-native'
import { Fonts, Metrics, Colors } from '../../themes'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  cardView: {
    flexDirection: 'row',
    borderRadius: 3,
    marginVertical: Metrics.smallMargin
  },
  contentMovie: {
    width: '80%',
  },
  detailMovie: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Metrics.baseMargin
  },
  warpIconPlay: {
    // borderWidth: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconPlay: {
    alignSelf: 'center',
  },
  txtLabelFileName: {
    fontSize: Fonts.size.regular,
    color: Colors.fire
  },
  txtLabelDetail: {
    fontSize: Fonts.size.regular,
    color: Colors.green
  }
})