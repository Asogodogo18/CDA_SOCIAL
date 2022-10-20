import {
  Box,
  Text,
  Post,
  Searchbar,
  SearchFilters,
  ProfileHeader,
  TabNav,
} from "../../../components";

import { ScrollView } from "react-native";
import React from "react";
import { PostImage, PostMultipleImages } from "../../../data/post";

const Profile = ({navigation}) => {
  const handleNavigation=()=>{
    return(
      navigation.navigate("HomeStack",{screen:'PostDetails'})
    )
  }
  return (
    <ScrollView
      contentContainerStyle={{ alignContent: "center" }}
      showsHorizontalScrollIndicator={false}
    >
      <Box style={{ marginTop: 30 }}>
        <ProfileHeader user="Amadou Diarra" />
      </Box>
      <Box mt={"s"}>
        <TabNav />
      </Box>
      <Box
        flex={1}
         p={'m'}
      >
        <Post data={PostImage} onPress={handleNavigation} />
        <Post data={PostMultipleImages} onPress={handleNavigation} />
        <Post data={PostImage} onPress={handleNavigation} />
      </Box>
    </ScrollView>
  );
};

export default Profile;
