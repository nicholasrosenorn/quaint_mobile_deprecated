import { View, Text, TouchableOpacity, SafeAreaView, Dimensions, Image } from 'react-native'
import React from 'react'
import NewPostButton from '../../components/common/newPostButton';
import { COLORS } from '../../constants';
import ProfileTop from '../../components/profile/ProfileTop';
import FeedPosts from '../../components/home/homefeed/FeedPosts.jsx'
import { ScrollView } from 'react-native-gesture-handler';



const profile = () => {
  return (
	<SafeAreaView style = {{ flex: 1, backgroundColor: COLORS.white}}>
		<ScrollView>
			<ProfileTop/>
			<FeedPosts/>
		</ScrollView>
		<NewPostButton/>
	</SafeAreaView>
  )
}

export default profile