import {
  Box,
  Avatar,
  Text,
  TextInput,
  Button,
  FeedFilters,
  Stories,
  Post,
  FollowCard,
  SectionHeader,
  MainHeader,
} from "../../../components";

import React from "react";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import {
  TouchableOpacity,
  Dimensions,
  ScrollView,
  StatusBar,
  FlatList,
} from "react-native";

import defaultFilters from "../../../data/feed";
import FollowingList from "../../../data/stories";
import {
  Poste,
  PostImage,
  PostMixedContent,
  PostMultipleImages,
  PostVideo,
} from "../../../data/post";
import { SafeAreaView } from "react-native-safe-area-context";
import useFeedController from "../../../viewController/Feed/FeedController";

const { width, height } = Dimensions.get("screen");

const Home = ({ navigation }) => {
  const handleNavigation = () => {
    navigation.navigate("Accueil", {
      screen: "Publication",
    });
  };

  const { isLoading, posts } = useFeedController();

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      {/* <StatusBar backgroundColor="white" barStyle={"dark-content"} /> */}

      <FlatList
        ListHeaderComponent={() => (
          <>
            <MainHeader title="Accueil" />
            <FeedFilters
              data={defaultFilters}
              onPress={() => console.log("Press")}
            />
            <SectionHeader title={"Now"} more={true} link={() => {}} />
            <Stories data={FollowingList} />
          </>
        )}
        data={Poste}
        renderItem={({ item }) => (
          <Post data={item} type={"main"} onPress={handleNavigation} />
        )}
        // keyExtractor={(item) => item.id}
        ListFooterComponent={() => (
          <ScrollView
            horizontal
            contentContainerStyle={{ paddingBottom: 70 }}
            showsHorizontalScrollIndicator={false}
          >
            <FollowCard />
            <FollowCard />
            <FollowCard />
            <FollowCard />
          </ScrollView>
        )}
        ListFooterComponentStyle={{ marginBottom: 10 }}
      />
    </SafeAreaView>
  );
};

export default Home;
