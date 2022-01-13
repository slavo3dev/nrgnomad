import {StyleSheet} from 'react-native'
import { fontSizes, paddingSizes } from '../../utils/size';

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
    fontSize: fontSizes.md,
  },
  inputContainer: {
    flex: 0.1,
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    marginRight: paddingSizes.sm,
    justifyContent: 'center',
    alignContent: "center"
  },
  btnContainer: {
    justifyContent: 'center'
  }
});