import React from "react";
import { Box, Text, Post, Searchbar, SearchFilters } from "../../../components";

import { ScrollView } from "react-native";

import SearchFilter from "../../../data/searchFiltre";
import { PostImage, PostMultipleImages } from "../../../data/post";
const Search = ({navigation}) => {
  const handleNavigation=()=>{
    return(
      navigation.navigate("HomeStack",{screen:'PostDetails'})
    )
  }
  return (
    <Box flex={1} mt={"xl"} pt={"m"}>
      <Searchbar placeholder="Recherche" />
      <SearchFilters data={SearchFilter} onPress={() => {}} />
      <ScrollView contentContainerStyle={{flexGrow:1,padding:10}}>
        <Post data={PostImage} onPress={handleNavigation}/>
        <Post data={PostMultipleImages} onPress={handleNavigation} />
        <Post data={PostImage} onPress={handleNavigation} />

        <Post data={PostMultipleImages} onPress={handleNavigation} />
        <Post data={PostImage} onPress={handleNavigation} />

        <Post data={PostMultipleImages} onPress={handleNavigation} />
      </ScrollView>
    </Box>
  );
};

export default Search;
