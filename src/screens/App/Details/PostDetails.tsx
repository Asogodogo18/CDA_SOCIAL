import React, { useEffect, useState } from "react";
import { ActivityIndicator, Platform, ScrollView } from "react-native";
import {
  Box,
  Post,
  ReplyField,
  Line,
  Text,
  ErrorDisplayView,
} from "../../../components";
import { useUserContext } from "../../../Context";

import usePostController from "../../../viewController/Post/usePostController";

export default function PostDetails({ route }) {
  const { user } = useUserContext();

  const { postId } = route.params;
  const {
    getPostById,
    comment,
    handleCommentChange,
    newComment,
    isSuccess: isCommentSuccess,
    isError: isCommentError,
    isLoading: sendingCOmment,
    data: commentData,
  } = usePostController();
  const {
    data: postData,
    isLoading,
    isFetching,
    isError,
    error,
  } = getPostById(postId);
  const [image, setImage] = useState([]);

  // //console.log("post params: ", route.params);

  ////console.log("single Post: ", postData);
  const handleSubmitComment = async () => {
    const commentPayload = new FormData();
    commentPayload.append("user", user.id);
    commentPayload.append("thread", postData.data.thread_id);
    commentPayload.append("text", comment);

    if (image.length == 0) commentPayload.append("type", "1");
    else if (image.length > 0) {
      const upload =
        Platform.OS === "android"
          ? image[0].uri
          : image[0].uri.replace("file://", "");
      commentPayload.append("type", "2");
      commentPayload.append("image", upload);
    }
    await newComment(commentPayload);
    if (isCommentSuccess) handleCommentChange("");
  };
  //console.log("comment response : ", commentData);

  // //console.log("post deails request: ", postData);

  if (isLoading || isFetching) {
    return (
      <Box flex={1} justifyContent={"center"} alignItems={"center"}>
        <ActivityIndicator size={"large"} color="green" />
      </Box>
    );
  }
  if (isError) {
    return <ErrorDisplayView message={error?.error} />;
  }
  return (
    <ScrollView contentContainerStyle={{ padding: 2, flexGrow: 1 }}>
      {postData.status !== 200 ? (
        <ErrorDisplayView message={postData.message} />
      ) : (
        <>
          <Post data={postData.data} type={"details"} onPress={() => {}} />
          <Line
            width={"100%"}
            height={2}
            alignSelf={"center"}
            backgroundColor={"lightgreen"}
          />
        </>
      )}

      <ReplyField
        value={comment}
        onChange={handleCommentChange}
        onSubmit={handleSubmitComment}
        placeholder="Votre Commentaire"
      />

      {postData?.replys_count && postData?.replys_count.length > 0
        ? postData?.replys_count.map((postReply, index) => (
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
