import React, { useState } from "react";
import {
  Box,
  Text,
  Post,
  Searchbar,
  SearchFilters,
  MainHeader,
} from "../../../components";

import { ScrollView } from "react-native";

import SearchFilter from "../../../data/searchFiltre";
import { PostImage, PostMultipleImages } from "../../../data/post";
import Animated from "react-native-reanimated";

const AnimatedBox = Animated.createAnimatedComponent(Box);

const Search = ({ navigation }) => {
  const [search, setSearch] = useState("");

  const onSearchChange = (param: string) => {
    setSearch(param);
  };

  const handleNavigation = () => {
    return navigation.navigate("HomeStack", { screen: "Publication" });
  };
  return (
    <Box flex={1} mt={"l"}>
      <MainHeader title="Recherche" />
      <Searchbar
        value={search}
        onChange={onSearchChange}
        placeholder="Recherche"
      />
      <SearchFilters data={SearchFilter} onPress={() => {}} />
      <Animated.ScrollView 
        contentContainerStyle={{ flexGrow: 1, padding: 10, paddingBottom: 80 }}
      >
        {/* <Post type="main" data={PostImage} onPress={handleNavigation} />
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
        /> */}
      </Animated.ScrollView>
    </Box>
  );
};

export default Search;
