import { Button, View, StyleSheet, Text } from 'react-native';
//import MyAppText from '../components/myAppText';


const HomeScreen = ({navigation}) => {
    return (
        <View style = {{ paddingTop: 50 }}>
            <Text style = {{ paddingTop: 50}}> This is the home screen! </Text>
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

export default HomeScreen;