import { SafeAreaView, Text, Button, View } from "react-native";
import { useRouter, Stack } from 'expo-router'

import PostTypeCard from "../../components/post/postType/postTypeCard";
import { COLORS, FONT } from "../../constants";

const PostChoice = () => {
    const router = useRouter();
    return (
        <SafeAreaView style={{backgroundColor: COLORS.white, flex:1}}>
			<Stack.Screen 
				options={{
					headerTitle: "", 
					headerTintColor: COLORS.primary,
					/*headerRight: () => <Button onPress={() => {router.push("/home")}} title="Post" />*/}}
			/>
			<PostTypeCard />
        </SafeAreaView>
    )
}

export default PostChoice;