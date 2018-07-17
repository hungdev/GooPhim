import { StyleSheet } from 'react-native'
import { Fonts, Metrics, Colors } from '../../themes'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  txtMovieName: {
    marginTop: Metrics.baseMargin,
    marginLeft: Metrics.doubleBaseMargin,
    color: Colors.green
  },
  chooseEpiLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Metrics.smallMargin,
    paddingVertical: Metrics.baseMargin
  },
  iconEpisode: {
    marginHorizontal: Metrics.baseMargin,
  },
  btnEpisode: {
    borderWidth: 1,
    margin: Metrics.smallMargin,
    padding: Metrics.baseMargin,
    borderRadius: 3
  },
  rowServer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  warpContentBelow: {
    padding: Metrics.baseMargin,
    paddingTop: 0
  },
  bookmarkRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  rowTitleBookmark: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})