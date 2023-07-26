import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../constants';
import { useRouter } from 'expo-router'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const NewPostButton = () => {
	const router = useRouter();
	return (
		<TouchableOpacity
			style={{
			backgroundColor: COLORS.primary,
			borderRadius: 100,
			zIndex:1000,
			position: 'absolute',
			width: 60,
			height: 60,
			alignItems: 'center',
			justifyContent: 'center',
			right: 20,
			bottom: 20,
			}}
			onPress={() => {router.push("/postChoice")}}
		>
			<Ionicons name="add-outline" size={32} color="white" />
		</TouchableOpacity>
	)
}

export default NewPostButton;