//import { View, Text } from 'react-native'
//import { Link } from 'expo-router'

/*const Post = () => {
  return (
    <View style={{flex:1, justifyContent:'center',alignItems:'center', gap:10}}>
      <Text> THIS IS THE POST PAGE</Text>
      <Link href='/list/1'>Link 1</Link>
      <Link href='/list/2'>Link 2</Link>
      <Link href='/list/3'>Link 3</Link>
    </View>
  )


export default Post;*/

import React from "react";
import { useState } from "react";
import { Text, View, Platform, KeyboardAvoidingView, SafeAreaView, ScrollView, Pressable, Button, TextInput, TouchableOpacity } from "react-native";
import {actions, RichEditor, RichToolbar} from "react-native-pell-rich-editor";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Link, Stack, useRouter } from 'expo-router';

import TitleInput from "../../components/post/title/titleInput";
import BodyInput from "../../components/post/body/bodyInput";
import { COLORS, FONT } from "../../constants";
import ToolBar from "../../components/post/toolbar/toolBar";
import PhotoPicker from "../../components/post/photo/photoPicker";

const Photo = () => {

  const richText = React.useRef();
  const router = useRouter();

  const [descHTML, setDescHTML] = useState("");
  const [showDescError, setShowDescError] = useState(false);

  // check for empty content: https://dev.to/mintpw/how-to-use-react-native-rich-editor-on-react-native-22nk
  const richTextHandle = (descriptionText) => {
    if (descriptionText) {
      setShowDescError(false);
      setDescHTML(descriptionText);
    } else {
      setShowDescError(true);
      setDescHTML("");
    }
  };

  // check for empty content cont.
  const submitContentHandle = () => {
    const replaceHTML = descHTML.replace(/<(.|\n)*?>/g, "").trim();
    const replaceWhiteSpace = replaceHTML.replace(/&nbsp;/g, "").trim();

    if (replaceWhiteSpace.length <= 0) {
      setShowDescError(true);
      //alert("Please enter content for your post")
      // FIX THIS
      router.push("/postOptions")
    } else {
      // send data to server and navigate to home page
      router.push("/postOptions")
    }
  };

	return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <Stack.Screen 
        options={{
          headerTitle: "", 
          headerRight: () => <TouchableOpacity onPress={submitContentHandle}><Text style={{color: COLORS.primary, fontFamily:FONT.regular, fontSize:17}}>Continue</Text></TouchableOpacity> /*<Button onPress={submitContentHandle} title="Save" style={{color: COLORS.primary}}/>*/,
          headerTintColor: COLORS.primary,
        }}
      />
      <ScrollView keyboardDismissMode='on-drag'>
        	<KeyboardAwareScrollView behavior={Platform.OS === "ios" ? "padding" : "height"}>
        		<TitleInput richTextHandleProp={richTextHandle}/>
				<PhotoPicker />
        </KeyboardAwareScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};


export default Photo;