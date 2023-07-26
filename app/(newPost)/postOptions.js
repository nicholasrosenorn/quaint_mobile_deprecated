import { Stack, useRouter } from "expo-router";
import { SafeAreaView, Text, Button, TouchableOpacity, View, FlatList } from "react-native";
import { useState } from 'react'

import { COLORS, FONT } from "../../constants";
import Tag from "../../components/common/tags/tag";

const tags = ['Minimalist Fashion', 'Mindful Eating', 'Minimalist Interior Design', 'Digital Minimalism', 'Minimalist Travel', 'Minimalist Parenting', 'Minimalist Recipes', 'Minimalist Art']
const onPressTag =(item)=>{ setActiveTags(item) }
/*[
	{id:1, tag: 'Minimalist Fashion'},
	{id:2, tag: 'Mindful Eating'},
	{id:3, tag: 'Minimalist Interior Design'},
	{id:4, tag: 'Digital Minimalism'},
	{id:5, tag: 'Minimalist Travel'},
	{id:6, tag: 'Minimalist Parenting'},
	{id:7, tag: 'Minimalist Recipes'},
	{id:8, tag: 'Minimalist Art'},
]*/

const PostOptions = () => {
	const router = useRouter();
	const [activeTags, setActiveTags] = useState([]);
  return (
	<SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
		<Stack.Screen 
        options={{
          headerTitle: "", 
          headerRight: () => <TouchableOpacity onPress={() => {router.push("/postPreview")}}><Text style={{color: COLORS.primary, fontFamily:FONT.regular, fontSize:17}}>Preview</Text></TouchableOpacity>,
		  headerTintColor: COLORS.primary,
		}}
		  />
		<View>
			<Text>What type of content are you posting?</Text>
			<Text>Blog</Text>
			<Text>Photo</Text>
			<Text>Discussion</Text>
		</View>
		<View>
			<Text>Add tags</Text>
		<Tag 
			tags={tags}
			activeTags={activeTags}
			setActiveTags={setActiveTags}
		/>

		</View>
		<Text>Post Options Page</Text>
		<Text>{activeTags}</Text>
	</SafeAreaView>
  ) 
}

export default PostOptions;