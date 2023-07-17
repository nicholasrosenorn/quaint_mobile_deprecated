import { Button, View, Text, Image, StyleSheet } from 'react-native';
import logo from "../assets/images/logo_small.png"
import MyAppText from "../components/myAppText"

const WelcomeScreen = ({navigation}) => {
    let desc_text = "Welcome to Quaint, a thriving online community for individuals embracing the beauty of minimalism. Discover a serene space where you can share ideas, find inspiration, and embark on a transformative journey towards a simpler, more intentional life."
    return (
        <View style = {styles.container}>
            
            <MyAppText text = "Quaint" />
            <MyAppText text = {desc_text} />
            <Image source={logo} />
            
            <Button
                title="Login"
                onPress={() =>
                navigation.navigate('Login', {name: 'Jane'})
                }
            />
            <Button
                title="Register for an account"
                onPress={() =>
                navigation.navigate('Profile', {name: 'Jane'})
                }
            />
        </View>
    );
  };

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        backgroundColor: "#A2DED0",
    },
    stretch: {
        width: 50,
        height: 200,
        resizeMode: 'stretch',
    },
});

export default WelcomeScreen;