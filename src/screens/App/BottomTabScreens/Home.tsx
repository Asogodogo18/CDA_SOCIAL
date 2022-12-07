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
  ErrorDisplayView,
} from "../../../components";

import React, { useEffect } from "react";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import {
  TouchableOpacity,
  Dimensions,
  ScrollView,
  StatusBar,
  FlatList,
  ActivityIndicator,
} from "react-native";

import defaultFilters from "../../../data/feed";
import FollowingList from "../../../data/stories";
import {
  Poste,
  PostImage,
  PostMixedContent,
  PostMultipleImages,
} from "../../../data/post";
import { SafeAreaView } from "react-native-safe-area-context";
import useFeedController from "../../../viewController/Feed/FeedController";
import { useUserContext } from "../../../Context";
import { useListFeedQuery } from "../../../Api/FeedApi";

const { width, height } = Dimensions.get("screen");

const Home = ({ navigation }) => {
  const { user } = useUserContext();
  const { getFeedList } = useFeedController();
  const {
    data: posts,
    isLoading,
    isFetching,
    isError,
    error,
  } = getFeedList(user.id);
  //console.log("user id homescreen: ", posts);

  const handleNavigation = (id) => {
    navigation.navigate("Accueil", {
      screen: "Publication",
      params: { postId: id },
    });
  };

  // const { isLoading, posts } = useFeedController();
  //console.log("posts feed screen: ", posts);

  if ([isLoading, isFetching].some(Boolean)) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{ paddingBottom: 70 }}
          showsHorizontalScrollIndicator={false}
        >
          <MainHeader title="Accueil" />
          <FeedFilters
            data={defaultFilters}
            onPress={() => console.log("Press")}
          />
          <SectionHeader title={"Now"} more={true} link={() => {}} />
          <Stories data={FollowingList} />
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
        </ScrollView>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="white" barStyle={"dark-content"} />
      {posts.code !== 200 ? (
       <ErrorDisplayView message={posts.message} />
      ) : (
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
          data={posts.data}
          initialNumToRender={10}
          contentContainerStyle={{ flexGrow: 1 }}
          onEndReachedThreshold={0.3}
          renderItem={({ item }) => (
            <Post data={item} type={"main"} onPress={handleNavigation} />
          )}
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
      )}
    </SafeAreaView>
  );
};

export default Home;
