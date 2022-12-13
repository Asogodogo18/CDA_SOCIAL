import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { PostApi, UserApi } from "../../Api";
import {
  useGetUserByIdQuery,
  useGetUserFromIdMutation,
} from "../../Api/UserApi";

const useUserController = () => {
  const [getUser, { isLoading, isSuccess }] = useGetUserFromIdMutation();
  const getUserById = (id: string) => {
    const payload = new FormData();
    payload.append("id", id);
    return useGetUserByIdQuery(payload);
  };

  const getUserFromId = async (id: string) => {
    const payload = new FormData();
    payload.append("id", id);
    return await getUser(payload).unwrap();
  };

  return { getUserById, getUserFromId };
};

export default useUserController;
