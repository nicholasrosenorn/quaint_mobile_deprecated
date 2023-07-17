import { View, Text, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native'
import React from 'react'
import NewPostButton from '../../components/common/newPostButton';
import { COLORS } from '../../constants';
import { ScrollView } from 'react-native-gesture-handler';

const profile = () => {
  return (
	<SafeAreaView>
		<ScrollView>
			<Text>PROFILE</Text>
		</ScrollView>
		<NewPostButton/>
	</SafeAreaView>
  )
}

export default profile