import { Stack } from "expo-router"
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';

import ScreenHeaderBtn from "../components/common/header/ScreenHeaderBtn";
import {COLORS, icons, images, SIZES} from '../constants'
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

SplashScreen.preventAutoHideAsync();


const StackLayout = () => {
    const [fontsLoaded] =useFonts({
        LBBold: require('../assets/fonts/LibreBaskerville-Bold.ttf'),
        LBItalic: require('../assets/fonts/LibreBaskerville-Italic.ttf'),
        LBRegular: require('../assets/fonts/LibreBaskerville-Regular.ttf'),
    })

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded])

    if (!fontsLoaded) return null;
    return (
        <Stack onLayout = {onLayoutRootView} >
            <Stack.Screen 
                name="(tabs)" 
                options = {{
                    headerStyle : {backgroundColor: COLORS.white},
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <TouchableOpacity><Ionicons name="menu-outline"  size={30} color={COLORS.gray} /></TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity><Ionicons name="search-outline"  size={30} color={COLORS.gray} /></TouchableOpacity>
                    ),
                    headerTitle: "",
                }}
                />
                <Stack.Screen name="post" options={{headerTitle: ""}}/>
        </Stack>
    )
}

export default StackLayout;