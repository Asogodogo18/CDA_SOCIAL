import React from "react";
import { ScrollView } from "react-native";
import { Box, Post, ReplyField, Line } from "../../../components";

import {
  Poste,
  PostImage,
  PostMultipleImages,
  PostMixedContent,
  PostVideo,
} from "../../../data/post";

export default function PostDetails({ route }) {
  // const {data}=route.param
  // console.log(route.param);

  return (
    <Box flex={1}>
      <ScrollView contentContainerStyle={{padding:2}}>
        <Post data={PostMultipleImages} type={"details"} onPress={() => {}} />

        <Line
          width={"100%"}
          height={2}
          alignSelf={"center"}
          backgroundColor={"lightgreen"}
        />

        <ReplyField  placeholder="Votre Commentaire" />
        <Post data={PostImage} type={"reply"} onPress={() => {}} />
        <Line
          width={"100%"}
          height={2}
          alignSelf={"center"}
          backgroundColor={"lightgreen"}
        />
        <Post data={PostImage} type={"reply"} onPress={() => {}} />
      </ScrollView>
    </Box>
  );
}
