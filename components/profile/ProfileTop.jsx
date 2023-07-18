import { View, Text, Image, ScrollView, Touchable, TouchableOpacity } from 'react-native';
import {COLORS, icons, images, SIZES} from '../../constants'
import styles from './ProfileTop.style';
import { Ionicons } from '@expo/vector-icons';

const ProfileTop = () => { 

	return (
		<View>
			<View style = {styles.header_container}>
				<View>
					<Image source = {images.profile} style={styles.image_style}/>
				</View>
				<View style={styles.username_container}>
					<View>
						<Text style={styles.username_text}>John Doe</Text>
					</View>
					<View style={styles.follow_container}>
						<TouchableOpacity>
							<View style={styles.follow_touchables}>
								<Ionicons name="person-outline" size={24}/>
								<Text style={styles.follow_text}>Followers</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity>
							<View style={styles.follow_touchables}>
								<Ionicons name="person-add-outline" size={24}/>
								<Text style={styles.follow_text}>Following</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>
			</View>
			<View style={styles.edit_container}>
				<View style={styles.edit_btn_container}>
					<TouchableOpacity style={styles.edit_btn}>
						<Text style={styles.btn_text}>Edit Your Profile</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.edit_btn_container}>
					<TouchableOpacity style={styles.edit_btn}>
						<Ionicons name="settings-outline" size={18} style={styles.btn_text}/>
						<Text style={styles.btn_text}>Settings</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
  )
}



export default ProfileTop