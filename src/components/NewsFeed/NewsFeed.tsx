import React, {
  useEffect,
  useState
} from 'react'
import {
  View,
  Text,
  FlatList,
  ActivityIndicator
} from 'react-native'

import NewsItem from '../NewsItem'

import { newsApiKey } from '../../../env'

import styles from './NewsFeed.styles'


interface INew {
  source: {
    id: string
  }
  author: number
  title: string
  urlToImage: string
  description: string
}

interface INewsFeedProps {
  searchTerm: string
}

const NewsFeed: React.FC<INewsFeedProps> = ( {
  searchTerm
} ) => {
  const [isLoading, setLoading] = useState<boolean>( true )
  const [error, setError] = useState<Error | null>( null )
  const [news, setNews] = useState<INew[]>( [] )
  const [page, setPage] = useState<number>( 1 )

  useEffect( () => {
    const fetchNews = async () => {
      try {
        const response = await fetch( `https://newsapi.org/v2/everything?qInTitle=${searchTerm}&language=en&pageSize=10&page=${page}&sortBy=publishedAt&apiKey=${newsApiKey}` )
        const { articles } = await response.json()
        setNews( ( prevNews: INew[] ): INew[] => ( [...prevNews, ...articles] ) )
      } catch ( error ) {
        setError( error )
      } finally {
        setLoading( false )
      }
    }

    fetchNews()
  }, [page, searchTerm] )

  const handleListEndReached = () => {
    setPage( ( prevPage ) => prevPage + 1 )
  }

  if ( error ) {
    return (
      <Text>{ error }</Text>
    )
  }

  return (
    <View style={ styles.list }>
      <Text style={ styles.title }>News:</Text>
      {
        isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={ news }
            keyExtractor={ ( { source: { id } }: INew, idx: number ) => `${id}_${idx}` }
            renderItem={ ( { item: { urlToImage, title } }: { item: INew } ) => (
              <NewsItem
                image={ urlToImage }
                title={ title }
              />
            ) }
            onEndReachedThreshold={ 0.5 }
            onEndReached={ handleListEndReached }
            nestedScrollEnabled={ true }
          />
        )
      }
    </View>
  )
}

export default NewsFeed
