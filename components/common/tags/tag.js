import { Stack, useRouter } from "expo-router";
import { SafeAreaView, Text, Button, TouchableOpacity } from "react-native";
import styles from "./tag.style"

const Tag = (prop, {activeTags, setActiveTag}) => {
    const router = useRouter();
    return (
        <TouchableOpacity style = {styles.tag} >
            <Text style={styles.tagText}>{prop.name}</Text>
        </TouchableOpacity>
    )
}

export default Tag;