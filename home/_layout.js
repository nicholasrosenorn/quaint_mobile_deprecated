/*import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {SafeAreaView} from 'react-native';

import {COLORS, icons, images, SIZES} from '../../../constants'
//import { Home, ForYou } from './home';
import Home from "../home.js"
import ForYou from "./foryou.js"

const Tab = createMaterialTopTabNavigator();

export default function homeLayout() {
  return (
      <NavigationContainer independent={true} >
        <Tab.Navigator 
        screenOptions= {{
          tabBarActiveTintColor: COLORS.gray,
          tabBarLabelStyle: {
            fontSize: 12
          },
          tabBarStyle: {
            backgroundColor: "white",
            paddingTop: 35
          },
          tabBarIndicatorStyle: {
            backgroundColor: COLORS.primary,
          }
        }}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="For You" component={ForYou} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}*/