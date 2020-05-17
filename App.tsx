import 'react-native-gesture-handler'
import React from 'react'
import {
  SafeAreaView,
  StatusBar
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import TabNavigator from './src/TabNavigator'

import data from './data.json'


const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={ { flex: 1 } }>
        <TabNavigator
          data={ data }
        />
      </SafeAreaView>
    </NavigationContainer>
  )
}

export default App
