import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { PostApi } from "../../Api";

const usePostController = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [postData, setPostData] = useState({});
  const [error, setError] = useState("");

  const getPostData = (id) => {
    setIsLoading(true);
    PostApi.getOne(id)
      .then((result) => {
        // console.log("result postData post info : ", result.data);
        setPostData(result.data);
      })
      .catch((err) => {
        console.log("error: ", err);
        setError(error);
      })
      .finally(() => setIsLoading(false));
  };

  const newPost = (payload) => {
    //TODO send post data with payload
  };

  const rePost = (payload) => {
    //TODO send post data with payload
  };

  const likePost = (payload) => {
    //TODO send post data with payload
  };

  const editPost = (payload) => {
    //TODO update post data with payload
  };

  const deletePost = (payload) => {
    //TODO transaction data with payload
  };

  const flagPost = (payload) => {
    //TODO transaction data with payload
  };

  const newComment = (payload) => {
    //TODO send comment data with payload
  };

  const editComment = (payload) => {
    //TODO update comment data with payload
  };

  const deleteComment = (payload) => {
    //TODO update comment data with payload
  };

  const flagComment = (payload) => {
    //TODO update comment data with payload
  };

  return { isLoading, postData, error, getPostData };
};

export default usePostController;
