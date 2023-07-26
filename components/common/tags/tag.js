/*import { Stack, useRouter } from "expo-router";
import { SafeAreaView, Text, Button, TouchableOpacity } from "react-native";
import styles from "./tag.style"

const Tag = ({activeTags, setActiveTag}) => {
    const router = useRouter();
    return (
        <TouchableOpacity style = {styles.tag} >
            <Text style={styles.tagText}>{prop.name}</Text>
        </TouchableOpacity>
    )
}

export default Tag;*/


import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'

import styles from './tag.style'
import {SIZES} from "../../../constants"

const TagButton = ( { name, activeTags, setActiveTags }) => {

	const onPressTag =(item)=>{ setActiveTags(item) }

	return (
		<TouchableOpacity
		style = {styles.btn(name, activeTags)}
		onPress = {() => onPressTag([name, activeTags])}
		>
			<Text style = {styles.btnText(name, activeTags)}>{name}</Text>
		</TouchableOpacity>
)}

const Tag = ({ tags, activeTag, setActiveTag}) => {
  return (
    <View style = {styles.container}>
      <FlatList
        data = {tags}
        renderItem={({ item }) => (
          <TagButton 
            name={item}
            activeTag={activeTag}
          />
        )}
        keyExtractor={item => item}
      />
    </View>
  )
}

export default Tag;