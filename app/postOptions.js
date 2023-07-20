import { Stack, useRouter } from "expo-router";
import { SafeAreaView, Text, Button, TouchableOpacity, View, FlatList } from "react-native";
import { COLORS, FONT } from "../constants";

const PostOptions = () => {
	const router = useRouter();
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
			<FlatList
        data={[
          {key: 'Minimalist Fashion'},
          {key: 'Mindful Eating'},
          {key: 'Minimalist Interior Design'},
          {key: 'Digital Minimalism'},
          {key: 'Minimalist Travel'},
          {key: 'Minimalist Parenting'},
          {key: 'Minimalist Recipes'},
          {key: 'Minimalist Art'},
        ]}
        renderItem={({item}) => <Text>{item.key}</Text>}
		/>
		</View>
		<Text>Post Options Page</Text>
	</SafeAreaView>
  ) 
}

export default PostOptions;