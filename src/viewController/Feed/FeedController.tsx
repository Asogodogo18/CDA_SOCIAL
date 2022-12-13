import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { FeedApi, PostApi } from "../../Api";
import axios from "axios";
import { MOCK_SERVER_URL } from "../../constants/api-constants";

const useFeedController = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const URL = `${MOCK_SERVER_URL}/feeds?userId=99889`;
    setIsLoading(true);
    // axios
    //   .get(URL)

      PostApi.getAll().then((result) => {
        // console.log("result: ", result.data);
        setPosts(result.data);
      })
      .catch((err) => {
        console.log("error: ", err);
      })
      .finally(() => setIsLoading(false));

    return () => {
      setPosts([]);
    };
  }, []);

  return { isLoading, posts };
};

export default useFeedController;
