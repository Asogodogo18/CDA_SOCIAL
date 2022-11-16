import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { PostApi, UserApi } from "../../Api";

const useUserController = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const getPostUser = (id) => {
    setIsLoading(true);
    UserApi.getOne(id)
      .then((result) => {
        // console.log("result user post info : ", result.data);
        setUser(result.data);
      })
      .catch((err) => {
        console.log("error: ", err);
        setError(error);
      })
      .finally(() => setIsLoading(false));
  };

  return { isLoading, user, error, getPostUser };
};

export default useUserController;
