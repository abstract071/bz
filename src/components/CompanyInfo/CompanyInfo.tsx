import React from 'react'
import {
  ScrollView,
  View,
  Text,
  Image
} from 'react-native'

import styles from './styles'


interface ICompany {
  id: number
  name: string
  logo: string
  description: string
}

interface ICompanyInfoProps {
  route: {
    params: ICompany
  }
}

const CompanyInfo: React.FC<ICompanyInfoProps> = ( {
  route: {
    params: {
      name,
      description
    }
  }
} ) => {
  console.log( name )

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
          { description }
        </Text>
      </View>
    </ScrollView>
  )
}

export default CompanyInfo
