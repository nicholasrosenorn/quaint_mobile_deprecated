import {View, Text, SafeAreaView} from 'react-native'
import {Stack, useSearchParams} from 'expo-router';

const DetailsPage = () => {
    const {id} = useSearchParams();

    return (
        <SafeAreaView>
            <Stack.Screen options={{headerShown:false}}/>
            <Text>My Details for: {id}</Text>
        </SafeAreaView>
    );
};

export default DetailsPage;