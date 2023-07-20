import { View, Text, TouchableOpacity, Dimensions, TextInput } from 'react-native'
import styles from "./titleInput.style";
import { COLORS } from '../../../constants';

const TitleInput = (props) => {
	return (
		//Good resource: https://blog.logrocket.com/complete-guide-textinput-react-native/
		<TextInput placeholder="Title" placeholderTextColor="gray" style={styles.input} maxLength={60} multiline={true} onChange={props.richTextHandleProp}/>
	)
}

export default TitleInput;