import { useState } from 'react';
import { 
  View, 
  Text,
  TextInput,
  TouchableOpacity,
  Image, 
  FlatList,
  ScrollView
} from 'react-native';
import { useRouter } from 'expo-router';

import styles from './feedheader.style';
import { icons, SIZES } from '../../../constants';

const filter = ["Blog", "Discussion", "Photo"]

const FeedHeader = ({ searchTerm, setSearchTerm, handleClick}) => {
  //const router = useRouter();
  const [activeFilter, setActiveFilter] = useState('Minimalism');

  return (
      <View style = {styles.tabsContainer}>
        <FlatList 
        data = {filter}
        renderItem ={({ item }) => (
          <TouchableOpacity 
          style = {styles.tab(activeFilter, item)}
          onPress = {() => {
            setActiveFilter(item);
            router.push(`/search/${item}`)
          }}
          >
            <Text style ={styles.tabText(activeFilter, item)}>{ item }</Text>
          </TouchableOpacity>
        )}
        keyExtractor = {item => item}
        contentContainerStyle = {{columnGap: SIZES.small}}
        horizontal
        />
      </View>
  )
}

export default FeedHeader