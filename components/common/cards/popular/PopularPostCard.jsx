import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './popularpostcard.style'
import { COLORS, SIZES } from '../../../../constants'
//import {checkImageURL} from '../../../../utils'
import { Ionicons } from '@expo/vector-icons'

const PopularPostCard = ({ item, selectedPost, handleCardPress }) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      style = {styles.container(selectedPost, item)}
      onPress={() => handleCardPress(item)}
    >
      <View>
        <Text 
          style = {styles.postTitle}
          numberOfLines={1}>
          {item.post_title}
        </Text>
        <Text style = {styles.post_user} numberOfLines={1}>Written by {item.post_user}</Text>
        <Text style = {styles.post_user} numberOfLines={1}>{item.post_date}</Text>
      </View>
      <View style = {styles.postFooter}>
        <View>
          <TouchableOpacity 
              style = {styles.category}
              onPress = {() => {
                router.push(`/search/${item}`)
              }}
              >
                <Text style ={styles.categoryText}>{ item.post_category }</Text>
            </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Ionicons name="bookmark-outline" size={20} color={COLORS.gray} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default PopularPostCard