import { Stack } from "expo-router"

import {COLORS, icons, images, SIZES} from '../../../constants'


const StackLayout = () => {
    return (
        <Stack >
            <Stack.Screen name="index" options={{headerShown:false}}/>
        </Stack>
    )
}

export default StackLayout;