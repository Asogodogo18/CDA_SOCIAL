import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { PostApi, UserApi } from "../../Api";
import { useGetUserByIdQuery } from "../../Api/UserApi";

const useUserController = () => {
  const getUserById = (id) => {
    const payload = new FormData();
    payload.append("id", id);
    return useGetUserByIdQuery(payload);
  };

  return { getUserById };
};

export default useUserController;
