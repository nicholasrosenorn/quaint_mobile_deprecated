import { useState} from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';

import styles from './popularPosts.style'
import {COLORS, SIZES} from '../../../constants'
import posthold from "../../../assets/images/post_hold.jpg"
import PopularPostCard from '../../common/cards/popular/PopularPostCard'

const PopularPosts = () => {
  const router = useRouter();

  /*const {data, isLoading, error} = useFetch('search', {
    query: 'React Developer',
    num_pages: 1
  })*/

  const data = [
    { 
      post_id: 1,
      post_photo: posthold, 
      post_title: "This is a sample title",
      post_user: "John Doe", 
      post_date: "June 15, 2023",
      post_category: "Minimalism",
    },
    { 
      post_id: 2,
      post_photo: posthold, 
      post_title: "Lorem Ipsum",
      post_user: "John Doe", 
      post_date: "June 15, 2023",
      post_category: "Essentialism",

    },
    { 
      post_id: 3,
      post_photo: posthold, 
      post_title: "Lorem Ipsum",
      post_user: "John Doe", 
      post_date: "June 15, 2023",
      post_category: "Mindfulness",
    },
    { 
      post_id: 4,
      post_photo: posthold, 
      post_title: "Lorem Ipsum",
      post_user: "John Doe", 
      post_date: "June 15, 2023",
      post_category: "Minimalism",
    }
  ]
  
  const isLoading = false;
  const error = false;

  const [selectedPost, setSelectedPost] = useState();

  const handleCardPress = (item) => {

  }

  
  return (
    <View style = {styles.container}>
      <View style = {styles.header}>
        <Text style = {styles.headerTitle}>Popular Posts</Text>
        <TouchableOpacity>
          <Text style = {styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style = {styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong!</Text>
        ) :
        <FlatList
          data = {data}
          renderItem = {({ item }) => (
            <PopularPostCard 
            item = {item}
            />
          )}
          keyExtractor={item => item?.post_id}
          contentContainerStyle = {{ columnGap: SIZES.medium}}
          horizontal
        />
      }
      </View>
    </View>
  )
}

export default PopularPosts