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
      contentContainerStyle={{ alignContent: "center", backgroundColor:"#F3F3F3" }}
      showsHorizontalScrollIndicator={false}
    >
      <Box mt={'xl'}>
        <ProfileHeader user="Amadou Diarra" />
      </Box>
      <Box my={"m"}>
        <TabNav />
      </Box>
      <Box
        flex={1}
         px={'m'}
      >
        <Post type="main" data={PostImage} onPress={handleNavigation} />
        <Post data={PostMultipleImages} onPress={handleNavigation} type={"main"} />
        <Post data={PostImage} onPress={handleNavigation} type={"main"} />
      </Box>
    </ScrollView>
  );
};

export default Profile;
