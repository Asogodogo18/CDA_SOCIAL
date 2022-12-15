import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { PostApi } from "../../Api";
import {
  useAddPostMutation,
  useBookmarksUnbookmarksPostMutation,
  useLikeUnlikePostMutation,
  usePostsByIdQuery,
  usePostsByUserMutation,
  useDeletePostMutation,
} from "../../Api/PostApi";

const usePostController = () => {
  const [addPost, { isLoading, isError, error, isSuccess, data }] =
    useAddPostMutation();
  const [postsByUser, { isLoading: isGettingUserPost }] =
    usePostsByUserMutation();

  const [
    bookmarksUnbookmarksPost,
    {
      isLoading: isBooking,
      isError: isBookingError,
      error: bookingError,
      isSuccess: isBookingSuccess,
      data: bookingData,
    },
  ] = useBookmarksUnbookmarksPostMutation();

  const [
    deletePost,
    {
      isLoading: isDeletingPost,
      isError: isDeletePostError,
      error: deletePostError,
      isSuccess: isPostDeleteSuccess,
      data: postDeleteData,
    },
  ] = useDeletePostMutation();
  const [
    likeUnlikePost,
    {
      isLoading: isLiking,
      isError: likingError,
      error: errorLike,
      isSuccess: isLikingSuccess,
      data: likeData,
    },
  ] = useLikeUnlikePostMutation();
  const [message, setMessage] = useState("");
  const [comment, setComment] = useState("");

  const handleCommentChange = (text: string) => {
    setComment(text);
  };
  const handleMessageChange = (text: string) => {
    setMessage(text);
  };

  const getPostById = (id) => {
    //console.log("query: ", id);
    const payload = new FormData();
    payload.append("id", id);
    return usePostsByIdQuery(payload,{refetchOnMountOrArgChange:true});
  };

  const getPostByUser = (id) => {
    //console.log("query: ", id);
    const payload = new FormData();
    payload.append("user", id);
    return postsByUser(payload).unwrap();
  };

  const createPost = (payload: FormData) => {
    return addPost(payload);
  };

  const likePost = (payload: {
    userID: string | Blob;
    postID: string | Blob;
  }) => {
    const { userID, postID } = payload;
    const formData = new FormData();
    formData.append("user", userID);
    formData.append("post", postID);
    return likeUnlikePost(formData);
  };

  const savePost = (payload: {
    userID: string | Blob;
    postID: string | Blob;
  }) => {
    const { userID, postID } = payload;
    const formData = new FormData();
    formData.append("user", userID);
    formData.append("post", postID);
    return bookmarksUnbookmarksPost(formData);
  };

  const rePost = (payload) => {
    return addPost(payload);
  };

  const editPost = (payload) => {
    //TODO update post data with payload
  };

  const deletePostMutation = async (payload: {
    userID: string | Blob;
    postID: string | Blob;
  }) => {
    const formData = new FormData();

    formData.append("user", payload.userID);
    formData.append("post", payload.postID);

    await deletePost(formData);
    return;
  };

  const flagPost = (payload) => {
    //TODO transaction data with payload
  };

  const newComment = async (payload) => {
    await addPost(payload);
    return;
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

  return {
    getPostByUser,
    getPostById,
    message,
    comment,
    handleCommentChange,
    handleMessageChange,
    createPost,
    isLoading,
    isError,
    isSuccess,
    error,
    data,
    newComment,
    likePost,
    isLiking,
    likingError,
    errorLike,
    isLikingSuccess,
    likeData,
    deletePostMutation,
    deleteComment,
    isPostDeleteSuccess,
    isDeletingPost,
    isDeletePostError,
    postDeleteData,
    savePost,
    isBooking,
    isBookingError,
    bookingError,
    isBookingSuccess,
    bookingData,
  };
};

export default usePostController;
