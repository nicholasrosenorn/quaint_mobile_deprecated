import { View, Text } from 'react-native'
import { Link } from 'expo-router'

const Post = () => {
  return (
    <View style={{flex:1, justifyContent:'center',alignItems:'center', gap:10}}>
      <Text> THIS IS THE POST PAGE</Text>
      <Link href='/list/1'>Link 1</Link>
      <Link href='/list/2'>Link 2</Link>
      <Link href='/list/3'>Link 3</Link>
    </View>
  )
}

export default Post;