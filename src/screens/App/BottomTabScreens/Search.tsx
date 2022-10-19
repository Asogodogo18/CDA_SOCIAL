import React from "react";
import { Box, Text, Post, Searchbar, SearchFilters } from "../../../components";

import { ScrollView } from "react-native";

import SearchFilter from "../../../data/searchFiltre";
import {
  PostImage,
  PostMixedContent,
  PostMultipleImages,
  PostVideo,
} from "../../../data/post";
const Search = () => {
  return (
    <Box flex={1} mt={"xl"} pt={"m"}>
      <Searchbar placeholder="Recherche" />
      <SearchFilters data={SearchFilter} onPress={() => {}} />
      <ScrollView>
        <Post data={PostImage} />
        <Post data={PostMixedContent} />
        <Post data={PostMultipleImages} />
      </ScrollView>
    </Box>
  );
};

export default Search;
