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
} from "../../../components";

import React from "react";
import { DrawerActions } from "@react-navigation/native";
import {
  TouchableOpacity,
  Dimensions,
  ScrollView,
  StatusBar,
} from "react-native";

import defaultFilters from "../../../data/feed";
import FollowingList from "../../../data/stories";
import {
  PostImage,
  PostMixedContent,
  PostMultipleImages,
  PostVideo,
} from "../../../data/post";

const { width, height } = Dimensions.get("screen");
const Home = ({ navigation }) => {
  return (
    <ScrollView
      contentContainerStyle={{ alignContent: "center", marginTop: 15 }}
      showsHorizontalScrollIndicator={false}
    >
      <StatusBar backgroundColor="white" barStyle={"dark-content"} />
      <Box flex={1} p={"m"}>
        <Box
          flexDirection={"row"}
          // justifyContent={"center"}
          alignItems={"center"}
          padding={"m"}
          margin={"s"}
          style={{ marginTop: 5 }}
        >
          <Avatar
            type={"header"}
            source={require("../../../../assets/profil.jpg")}
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            position={"absolute"}
            left={150}
            elevation={3}
          />

          <Text
            variant={"title"}
            textAlign={"center"}
            style={{ fontSize: 24, marginLeft: 90, fontWeight: "bold" }}
          >
            Accueil
          </Text>
        </Box>

        <Box style={{ marginTop: -15 }}>
          <FeedFilters
            data={defaultFilters}
            onPress={() => console.log("Press")}
          />
        </Box>
        <Box
          flexDirection={"row"}
          justifyContent={"space-between"}
          // padding={"m"}
          mt={"ml"}
          mb={"ml"}
        >
          <Text variant={"title"}>NOW</Text>
          <TouchableOpacity>
            <Text variant={"title"}>Voir Plus</Text>
          </TouchableOpacity>
        </Box>
        <Box mb={"m"}>
          <Stories data={FollowingList} />
        </Box>

        <Post data={PostImage} />
        <Post data={PostMixedContent} />
        <Post data={PostMultipleImages} />

        <ScrollView
          horizontal
          contentContainerStyle={{ padding: 10 }}
          showsHorizontalScrollIndicator={false}
        >
          <FollowCard />
          <FollowCard />
          <FollowCard />
          <FollowCard />
        </ScrollView>
        <Post data={PostMultipleImages} />
        <Post data={PostVideo} />

        <ScrollView horizontal contentContainerStyle={{ padding: 10 }}>
          <FollowCard />
          <FollowCard />
          <FollowCard />
        </ScrollView>
        <Post data={PostMultipleImages} />
        <Post data={PostVideo} />
      </Box>
    </ScrollView>
  );
};

export default Home;
