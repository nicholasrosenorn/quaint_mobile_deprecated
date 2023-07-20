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
import { Text, View, Platform, KeyboardAvoidingView, SafeAreaView, ScrollView, Pressable } from "react-native";
import {actions, RichEditor, RichToolbar} from "react-native-pell-rich-editor";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const handleHead = ({tintColor}) => <Text style={{color: tintColor}}>H1</Text>
const Post = () => {

  const richText = React.useRef();

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
    } else {
      // send data to your server!
    }
  };

	return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView keyboardDismissMode='on-drag'>
        <KeyboardAwareScrollView behavior={Platform.OS === "ios" ? "padding" : "height"}>
          {/*<Pressable onPress={() => richText.current?.dismissKeyboard()}>
            <Text>Rich Text Editor:</Text>
          </Pressable>*/}
          <RichEditor ref={richText} initialHeight={1000} style = {{height: 100}} placeholder="Begin by writing your story here"/>
          {/*<RichEditor
              ref={richText}
              onChange={ descriptionText => {
                  console.log("descriptionText:", descriptionText);
              }}
          />*/}
        </KeyboardAwareScrollView>
      </ScrollView>
      <KeyboardAvoidingView behavior={'position'} enabled keyboardVerticalOffset={90}>
        <RichToolbar
          editor={richText}
          //actions={[ actions.insertImage, actions.setBold, actions.setItalic, actions.setUnderline, actions.heading1 ]}
          iconMap={{ [actions.heading1]: handleHead }}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};


export default Post;