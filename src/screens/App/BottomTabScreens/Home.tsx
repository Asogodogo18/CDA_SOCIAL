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

const { width, height } = Dimensions.get("screen");

const Home = ({ navigation }) => {
  const handleNavigation = () => {
    navigation.navigate("Accueil", {
      screen: "Publication",
    });
  };
  return (
    <ScrollView
      contentContainerStyle={{
        alignContent: "center",
        paddingBottom: 20,
        paddingHorizontal: 10,
      }}
      showsHorizontalScrollIndicator={false}
      nestedScrollEnabled
    >
      <StatusBar backgroundColor="white" barStyle={"dark-content"} />

      {/* <Box
        flexDirection={"row"}
        // justifyContent={"center"}
        alignItems={"center"}
        padding={"m"}
        margin={"s"}
        style={{ marginTop: 5 }}
      >
        <Avatar
          type={"header"}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPnozsb1QEhjyjE7p-bGl9hQOkJh0brsUKoA&usqp=CAU",
          }}
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
      </Box> */}
      <MainHeader title="Accueil"  />
      <FeedFilters data={defaultFilters} onPress={() => console.log("Press")} />

      <SectionHeader title={"Now"} more={true} link={() => {}} />

      <Stories data={FollowingList} />

      <FlatList
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

      {/* <Post data={PostImage} onPress={handleNavigation} type={"main"} />
        <Post
          data={PostMixedContent}
          onPress={handleNavigation}
          type={"main"}
        />
        <Post
          data={PostMultipleImages}
          onPress={handleNavigation}
          type={"main"}
        />

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
        <Post
          data={PostMultipleImages}
          onPress={handleNavigation}
          type={"main"}
        />
        <Post data={PostVideo} onPress={handleNavigation} type={"main"} />

        <ScrollView horizontal contentContainerStyle={{ padding: 10 }}>
          <FollowCard />
          <FollowCard />
          <FollowCard />
        </ScrollView>
        <Post
          data={PostMultipleImages}
          onPress={handleNavigation}
          type={"main"}
        />
        <Post data={PostVideo} onPress={handleNavigation} type={"main"} /> */}
    </ScrollView>
  );
};

export default Home;
