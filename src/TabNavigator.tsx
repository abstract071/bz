import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import Company from './components/Company'


const Tab = createMaterialTopTabNavigator()

interface ICompany {
  id: number
  name: string
  logo: string
  description: string
}

interface ITabNavigatorProps {
  data: ICompany[]
}

const TabNavigator: React.FC<ITabNavigatorProps> = ( {
  data
} ) => {
  return (
    <Tab.Navigator initialRouteName={ data[0].name }>
      {
        data.map( ( company: ICompany ) => (
          <Tab.Screen
            key={ company.id }
            name={ company.name }
            component={ Company }
            initialParams={ company }
          />
        ) )
      }
    </Tab.Navigator>
  )
}

export default TabNavigator
