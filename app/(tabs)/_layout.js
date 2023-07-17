import { Tabs } from "expo-router"
import { Text } from "react-native";

import ScreenHeaderBtn from '../../components/common/header/ScreenHeaderBtn';
import {COLORS, icons, images, SIZES} from '../../constants'
import Ionicons from 'react-native-vector-icons/Ionicons';


export default () => {
    return (
        <Tabs 
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'home') {
                iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'post') {
                iconName = focused ? 'add-circle-sharp' : 'add-circle-outline';
            } else if (route.name === 'journeys') {
                iconName = focused ? 'compass': 'compass-outline';
            } else if (route.name === 'profile') {
                iconName = focused ? 'person' : 'person-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#A2DED0',
            tabBarInactiveTintColor: 'gray',
            headerStyle : {backgroundColor: COLORS.lightWhite},
            headerShadowVisible: false,
            headerLeft: () => (
                <Text>quaint</Text>
            ),
            headerRight: () => (
                <ScreenHeaderBtn iconUrl ={images.profile} dimension="100%"/>
            ),
            headerTitle: "",
            headerShown:false
        }
        )}>
            <Tabs.Screen name="home" />
            <Tabs.Screen name="journeys" />
            <Tabs.Screen name="feed" options={{href: null}}/>
            <Tabs.Screen name="foryou" options={{href: null}}/>


        </Tabs>
    )
}