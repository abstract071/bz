import { StyleSheet } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'


const styles = StyleSheet.create( {
  rootView: {
    backgroundColor: Colors.lighter
  },
  nameView: {
    paddingVertical: 10
  },
  name: {
    textAlign: 'center',
    fontSize: 48,
    fontWeight: 'bold',
    color: Colors.dark,
    textShadowColor: 'rgba(55, 55, 55, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 8,
    letterSpacing: 12
  },
  imageView: {
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageWrapper: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white
  },
  image: {
    width: 100,
    height: 100
  },
  descriptionView: {
    paddingVertical: 12
  },
  description: {
    fontSize: 18,
    fontWeight: '300',
    letterSpacing: 2,
    color: Colors.dark
  }
} )

export default styles
