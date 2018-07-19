import { StyleSheet } from 'react-native'
import { Fonts, Metrics, Colors } from '../../themes'

export default StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center"
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
    height: 300,
    width: '80%',
    alignSelf: 'center'
  },
  //
  dropdownStyle: {
    width: 50,
    borderColor: 'red',
    alignSelf: 'center'

  },
  rowType: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    borderBottomWidth: 1,
    borderColor: Colors.borderColor,
    width: 50,
  },
  headerModal: {
    borderBottomWidth: 1,
    width: '100%',
    alignItems: 'center'
  },
  txtType: {
    flex: 1,
    textAlign: 'center',
    fontSize: Fonts.size.medium,
    color: Colors.black
  },
  inputEp: {
    height: 40,
    width: 100,
    borderWidth: 1,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 10
  },
  btnSearch: {
    borderWidth: 1,
    alignItems: 'center',
    marginTop: 30,
    padding: 10,
    borderRadius: 5
  }
});