import { Stack } from "expo-router"
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';

import {COLORS, icons, images, SIZES} from '../constants'

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
            <Stack.Screen name="(tabs)" options={{headerShown:false}}/>
        </Stack>
    )
}

export default StackLayout;