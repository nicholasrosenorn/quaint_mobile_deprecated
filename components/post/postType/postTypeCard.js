import { Stack, useRouter } from "expo-router";
import { SafeAreaView, Text, Button, View, TouchableOpacity } from "react-native";

import styles from "./PostTypeCard.style"

const PostTypeCard = () => {
    const router = useRouter();
    return (
        <View style={styles.container}>
				<View>
					<Text style={styles.headerText}>What type of content are you posting?</Text>
				</View>
				<View style={styles.cardContainer}>
					<TouchableOpacity style={styles.touchableType} onPress={() => router.push("/(newPost)/post")}>
						<View style={styles.postTypeContainer}>
							<Text style={styles.postTypeText}>Blog</Text>
							<Text style={styles.postTypeDesc}>Share longer stories, advice, and posts</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={styles.touchableType}>
						<View style={styles.postTypeContainer}>
							<Text style={styles.postTypeText}>Discussion</Text>
							<Text style={styles.postTypeDesc}>Ask the Quaint community your questions</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={styles.touchableType}>
						<View style={styles.postTypeContainer}>	
							<Text style={styles.postTypeText}>Photo</Text>
							<Text style={styles.postTypeDesc}>Showcase the great minimal photos and art you create</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
    )
}

export default PostTypeCard;