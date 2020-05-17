import React from 'react'
import {
  ScrollView,
  View,
  Text,
  Image
} from 'react-native'

import styles from './styles'


declare const global: { HermesInternal: null | {} }

interface ICompany {
  name: string
  logo: string
  description: string
}

interface ICompanyInfoProps {
  info: ICompany
}

const CompanyInfo: React.FC<ICompanyInfoProps> = ( {
  info: {
    name,
    logo,
    description
  }
} ) => {
  console.log( name, logo, description )

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={ styles.scrollView }
    >
      <View style={ styles.nameView }>
        <Text style={ styles.name }>{ name }</Text>
      </View>
      <View style={ styles.imageView }>
        <View style={ styles.imageWrapper }>
          <Image
            source={ require( '../../assets/images/tesla.png' ) }
            style={ styles.image }
          />
        </View>
      </View>
      <View style={ styles.descriptionView }>
        <Text style={ styles.description }>
          Tesla, Inc. (formerly Tesla Motors, Inc.), is an American electric vehicle and clean energy company based in Palo Alto,
          California. The company specializes in electric vehicle manufacturing, battery energy storage from home to grid scale and,
          through its acquisition of SolarCity, solar panel and solar roof tile manufacturing.
        </Text>
      </View>
    </ScrollView>
  )
}

export default CompanyInfo
