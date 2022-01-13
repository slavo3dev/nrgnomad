import { StyleSheet} from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.1,
    justifyContent: 'center',
  },
  title: {
    color: "#fff",
    fontWeight: 'bold',
    fontSize: 20,
  },
  inputContainer: {
    flex: 0.1,
    flexDirection: 'row'
  },
  textInput: {
    flex: 1,
    marginRight: 5
  },
  btnContainer: {
    justifyContent: 'center'
  }
});