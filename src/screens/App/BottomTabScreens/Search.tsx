import React, { useState } from "react";
import { Box, Text, Post, Searchbar, SearchFilters } from "../../../components";

import { ScrollView } from "react-native";

import SearchFilter from "../../../data/searchFiltre";
import { PostImage, PostMultipleImages } from "../../../data/post";
const Search = ({ navigation }) => {
  const [isSearch, setIsSearch] = useState('')
  const handleNavigation = () => {
    return navigation.navigate("HomeStack", { screen: "Publication" });
  };
  return (
    <Box flex={1} mt={"xl"} pt={"m"}>
      <Box flexDirection={"row"} justifyContent={"space-between"} p={"m"}>
        <Text variant={"header"}>Recherche</Text>
      </Box>
      <Searchbar placeholder="Recherche" value={isSearch} onChange={setIsSearch} />
      <SearchFilters data={SearchFilter} onPress={() => {}} />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, padding: 10, paddingBottom: 80 }}
      >
        <Post type="main" data={PostImage} onPress={handleNavigation} />
        <Post
          type="main"
          data={PostMultipleImages}
          onPress={handleNavigation}
        />
        <Post type="main" data={PostImage} onPress={handleNavigation} />

        <Post
          type="main"
          data={PostMultipleImages}
          onPress={handleNavigation}
        />
        <Post type="main" data={PostImage} onPress={handleNavigation} />

        <Post
          type="main"
          data={PostMultipleImages}
          onPress={handleNavigation}
        />
      </ScrollView>
    </Box>
  );
};

export default Search;
