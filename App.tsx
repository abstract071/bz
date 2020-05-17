import React from 'react'
import {
  SafeAreaView,
  StatusBar
} from 'react-native'

import CompanyInfo from './src/components/CompanyInfo'


declare const global: { HermesInternal: null | {} }

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={ { flex: 1 } }>
        <CompanyInfo
          info={ {
            name: 'Tesla',
            logo: '',
            description: ''
          } }
        />
      </SafeAreaView>
    </>
  )
}

export default App
