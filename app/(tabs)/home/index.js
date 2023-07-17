
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { useRouter } from 'expo-router'
import { useState } from 'react'


import FeedHeader from '../../../components/home/feedheader/FeedHeader'
import PopularPosts from '../../../components/home/popular/PopularPosts.jsx'
import FeedPosts from '../../../components/home/homefeed/FeedPosts.jsx'
import {COLORS, icons, images, SIZES} from '../../../constants'
import NewPostButton from '../../../components/common/newPostButton'


const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white}}>
      <ScrollView>
        <FeedHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <FeedPosts />
      </ScrollView>
      <NewPostButton />
    </SafeAreaView>
  )
}

export default Home;