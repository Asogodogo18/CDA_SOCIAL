import React, { useEffect } from "react";
import { ActivityIndicator, ScrollView } from "react-native";
import { Box, Post, ReplyField, Line, Text } from "../../../components";

import usePostController from "../../../viewController/Post/usePostController";

export default function PostDetails({ route }) {
  const { postId } = route.params;
  const { isLoading, postData, error, getPostData } = usePostController();
  console.log("post params: ", route.params);

  console.log("single Post: ", postData);

  useEffect(() => {
    getPostData(postId);
    return () => {};
  }, []);

  if (isLoading) {
    return (
      <Box flex={1} justifyContent={"center"} alignItems={"center"}>
        <ActivityIndicator size={"large"} color="green" />
      </Box>
    );
  }
  if (error) {
    return (
      <Box my={"s"} px={"s"} backgroundColor="white" alignItems={"center"}>
        <Text color={"danger"} variant={"body2"}>
          {error}
        </Text>
      </Box>
    );
  }
  return (
    <ScrollView contentContainerStyle={{ padding: 2, flexGrow: 1 }}>
      <Post data={postData} type={"details"} onPress={() => {}} />
      <Line
        width={"100%"}
        height={2}
        alignSelf={"center"}
        backgroundColor={"lightgreen"}
      />

      <ReplyField placeholder="Votre Commentaire" />

      {!isLoading && postData?.reply.length > 0
        ? postData?.reply.map((postReply, index) => (
            <>
              <Post
                key={`post-reply-0${index}`}
                data={postReply}
                type={"reply"}
                onPress={() => {}}
              />
              <Line
                key={`post-divider-0${index}`}
                width={"100%"}
                height={2}
                alignSelf={"center"}
                backgroundColor={"greenLight"}
              />
            </>
          ))
        : null}
    </ScrollView>
  );
}
