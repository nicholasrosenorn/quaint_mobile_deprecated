import { Stack, useRouter } from "expo-router";
import { SafeAreaView, Text, Button } from "react-native";

const PostPreview = () => {
    const router = useRouter();
    return (
        <SafeAreaView>
          <Stack.Screen 
              options={{
                headerTitle: "", 
                headerRight: () => <Button onPress={() => {router.push("/home")}} title="Post" />}}
          />
          <Text>Preview Page</Text>
        </SafeAreaView>
    )
}

export default PostPreview;