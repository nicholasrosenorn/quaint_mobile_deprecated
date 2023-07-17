import { View, Text, SafeAreaView } from 'react-native'
import { useRouter } from 'expo-router'
import { useState } from 'react'


import FeedHeader from '../../components/home/feedheader/FeedHeader'
import PopularPosts from '../../components/home/popular/PopularPosts.jsx'
//import FeedPosts from '../../components/home/homefeed/FeedPosts.js'
import {COLORS, icons, images, SIZES} from '../../constants'


const Feed = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  return (
    <SafeAreaView style = {{ flex: 1, backgroundColor: COLORS.lightWhite}}>
      <FeedHeader 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleClick = { () => {
            if (searchTerm) {
                router.push(`/search/${searchTerm}`)
            }
        }}
      />
    <PopularPosts />
    
    </SafeAreaView>
  )
}

export default Feed;