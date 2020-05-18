import React from 'react'
import {
  View,
  Text,
  Image
} from 'react-native'

import styles from './NewsItem.styles'


interface INewsItemProps {
  image: string
  title: string
}

const NewsItem: React.FC<INewsItemProps> = ( {
  image,
  title
} ) => {
  return (
    <View style={ styles.newView }>
      <View style={ styles.imageView }>
        <Image
          source={ { uri: image || '', width: 75, height: 75 } }
        />
      </View>
      <View style={ styles.titleView }>
        <Text style={ styles.title }>{ title }</Text>
      </View>
    </View>
  )
}

export default NewsItem
