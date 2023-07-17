import React from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, ActivityIndicator, ScrollView } from "react-native";

import styles from "./feedposts.style";
import { COLORS } from "../../../constants";
import FeedPostCard from "../../common/cards/feed/FeedPostCard";
import posthold from "../../../assets/images/post_hold.jpg"

//import useFetch from "../../../hook/useFetch";

const FeedPosts = () => {

  const data = [
    { 
      post_id: 1,
      post_photo: posthold, 
      post_title: "This is a Sample Title",
      post_user: "John Doe", 
      post_date: "June 15, 2023",
      post_category: "Blog",
    },
    { 
      post_id: 2,
      post_photo: posthold, 
      post_title: "This is a Longer Sample Title for testing purposes",
      post_user: "John Doe", 
      post_date: "June 15, 2023",
      post_category: "Discussion",

    },
    { 
      post_id: 3,
      post_photo: posthold, 
      post_title: "This is a very long Sample Title for testing purposes and to see overflow results",
      post_user: "John Doe", 
      post_date: "June 15, 2023",
      post_category: "Photo",
    },
    { 
      post_id: 4,
      post_photo: posthold, 
      post_title: "Lorem Ipsum",
      post_user: "John Doe", 
      post_date: "June 15, 2023",
      post_category: "Blog",
    },
    { 
      post_id: 5,
      post_photo: posthold, 
      post_title: "This is a Sample Title",
      post_user: "John Doe", 
      post_date: "June 15, 2023",
      post_category: "Blog",
    },
    { 
      post_id: 6,
      post_photo: posthold, 
      post_title: "Lorem Ipsum",
      post_user: "John Doe", 
      post_date: "June 15, 2023",
      post_category: "Discussion",

    },
    { 
      post_id: 7,
      post_photo: posthold, 
      post_title: "Lorem Ipsum",
      post_user: "John Doe", 
      post_date: "June 15, 2023",
      post_category: "Photo",
    },
  ]

  //const { data, isLoading, error } = useFetch("search", {
    //query: "React Native developer",
    //num_pages: "1",
  //});
  const isLoading = false;
  const error = false;

  return (
    <View style={styles.container}>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          data?.map((post) => (
            <FeedPostCard
              post={post}
              key={`nearby-job-${post.post_id}`}
              //handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default FeedPosts;