import { StyleSheet } from 'react-native'
import { Fonts, Metrics, Colors } from '../../themes'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  warpMovieInfo: {
    flex: 1,
    flexDirection: 'row',
    // borderWidth: 1,
    // borderColor: 'red'
  },
  cardView: {
    flexDirection: 'row',
    borderRadius: 3,
    marginVertical: Metrics.smallMargin,
    // flex: 1
    // alignItems: 'center'
  },
  contentMovie: {
    // width: '75%',
    // borderWidth: 1
  },
  detailMovie: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Metrics.baseMargin
  },
  warpIconPlay: {
    // borderWidth: 1,
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Metrics.baseMargin
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
  },
  imgMovie: {
    height: 100,
    width: 100
  },
  icBookmark: {
    // marginRight: Metrics.baseMargin,
    alignSelf: 'center',
    color: 'orange'
  },
  warpBookmarkIcon: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 40,
    // borderWidth: 1
    // flex: 1
  },
  txtMovieName: {
    width: Metrics.screenWidth - 190
  }
})