
import { KeyboardAvoidingView } from 'react-native'
import { COLORS, FONT } from '../../../constants';
import {RichToolbar, actions} from "react-native-pell-rich-editor";

import styles from "./toolBar.style"

const ToolBar = (props) => {

	const handleHead = ({tintColor}) => <Text style={{color: tintColor}}>H1</Text>

	return (
		<KeyboardAvoidingView behavior={'position'} enabled keyboardVerticalOffset={90}>
			<RichToolbar
				editor={props.richTextProp}
				//actions={[ actions.insertImage, actions.setBold, actions.setItalic, actions.setUnderline, actions.heading1 ]} -- default actions being used: https://www.npmjs.com/package/react-native-pell-rich-editor
				iconMap={{ [actions.heading1]: handleHead }}
			/>
		</KeyboardAvoidingView>
	)
}

export default ToolBar;
