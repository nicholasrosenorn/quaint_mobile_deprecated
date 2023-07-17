import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { COLORS, SHADOWS, SIZES, FONT } from "../../../../constants";
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router';
import { useNavigation } from '@react-navigation/native';



import styles from './feedpostcard.style'
//import {checkImageURL} from '../../../../utils'

const FeedPostCard = ({ post }) => {
  const router = useRouter();
  const navigation = useNavigation();
  return (
    <TouchableOpacity 
    style = {styles.container}
    onPress={() => router.push(`/(tabs)/home/posts/${post.post_id}`)}
    >
      <View style = {{flexDirection: "column", flex: 1}}>
        <View style = {{flexDirection: "row", justifyContent: "space-between"}}>
          <View style = {styles.textContainer}>
            <Text style = {styles.post_title} numberOfLines={2}>
              {post.post_title} 
            </Text>
            <Text style={styles.post_author}>{post.post_user} - {post.post_date}</Text>
          </View>
          <View style = {styles.pictureContainer}>
            <Image 
              source={ post.post_photo }
              style={styles.postImage}
          />
          </View>
        </View>
          <View style = {styles.postFooter}>
            <TouchableOpacity >
              <Text style = {styles.post_classification}>{post.post_category}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="bookmark-outline" size={20} color={COLORS.lightGray} style = {{paddingTop:5}}/>
            </TouchableOpacity>  
          </View>
      </View>
    </TouchableOpacity>
    
  )
}

export default FeedPostCard;