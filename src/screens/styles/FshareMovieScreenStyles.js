import { StyleSheet } from 'react-native'
import { Fonts, Metrics, Colors } from '../../themes'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  chooseEpiLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Metrics.baseMargin,
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
  rowCopy: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: Metrics.baseMargin
  }
})