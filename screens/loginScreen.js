import { Button, View, StyleSheet, Text } from 'react-native';


const LoginScreen = ({navigation}) => {
    return (
        <View>
            <Text>Login</Text>

            <Button
                title="Go to Jane's profile page"
                onPress={() =>
                navigation.navigate('Profile', {name: 'Jane'})
                }
            />
        </View>
    );
  };

const styles = StyleSheet.create({
    container: {
      paddingTop: 200,
      backgroundColor: "#A2DED0",
      justifyContent: 'center',
    },
    stretch: {
      width: 50,
      height: 200,
      resizeMode: 'stretch',
    },
  });

export default LoginScreen;