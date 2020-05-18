import React from 'react'
import {
  View,
  Text,
  Image
} from 'react-native'

import styles from './CompanyInfo.styles'


interface ICompanyInfoProps {
  name: string
  description: string
}

const CompanyInfo: React.FC<ICompanyInfoProps> = ( {
  name,
  description
} ) => {
  return (
    <View
      style={ styles.rootView }
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
          { description }
        </Text>
      </View>
    </View>
  )
}

export default CompanyInfo
