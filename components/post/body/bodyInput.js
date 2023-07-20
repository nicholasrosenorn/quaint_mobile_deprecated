
import { View, Text, TouchableOpacity, Dimensions, TextInput } from 'react-native'
import { COLORS, FONT } from '../../../constants';
import {RichEditor} from "react-native-pell-rich-editor";

import styles from "./bodyInput.style"
import FontFamilyStylesheet from './fontStyleSheet.style';

const BodyInput = (props) => {
	// using custom fonts: https://www.npmjs.com/package/react-native-pell-rich-editor
	const initialCSSText = { initialCSSText: `${FontFamilyStylesheet}`, contentCSSText: `font-family: ${FONT.regular}` }

	return (
		//Good resource: https://blog.logrocket.com/complete-guide-textinput-react-native/
		<RichEditor ref={props.richTextProp} initialHeight={1000} placeholder="Body of your post" onChange={props.richTextHandleProp} style={styles.input} editorStyle={initialCSSText}/>
	)
}

export default BodyInput;
