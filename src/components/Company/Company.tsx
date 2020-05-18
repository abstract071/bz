import React from 'react'
import {
  ScrollView
} from 'react-native'

import CompanyInfo from '../CompanyInfo'
import NewsFeed from '../NewsFeed'

import styles from './Company.styles'


interface ICompany {
  id: number
  name: string
  logo: string
  description: string
}

interface ICompanyProps {
  route: {
    params: ICompany
  }
}

const Company: React.FC<ICompanyProps> = ( {
  route: {
    params: {
      name,
      description
    }
  }
} ) => {
  return (
    <ScrollView style={ styles.scrollView }>
      <CompanyInfo
        name={ name }
        description={ description }
      />
      <NewsFeed searchTerm={ name } />
    </ScrollView>
  )
}

export default Company
