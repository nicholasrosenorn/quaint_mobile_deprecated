import {View, Text, SafeAreaView} from 'react-native'
import {Stack, useSearchParams} from 'expo-router';

const PostPage = () => {
    const params = useSearchParams();

    return (
        <SafeAreaView>
            <Stack.Screen options={{headerShown:false}}/>
            <Text>Post Page for Post ID: {params.post_id}</Text>
        </SafeAreaView>
    );
};

export default PostPage;