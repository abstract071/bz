import { StyleSheet } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'


const styles = StyleSheet.create( {
  newView: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: Colors.gray,
    borderRadius: 5,
    flexDirection: 'row',
    marginVertical: 4
  },
  imageView: {
    borderRadius: 5
  },
  titleView: {
    flexShrink: 1
  },
  title: {
    padding: 8,
    fontSize: 16,
    fontWeight: '300',
    color: Colors.dark
  }
} )

export default styles
