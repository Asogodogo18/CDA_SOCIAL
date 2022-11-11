import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { PostApi } from "../../Api";

const useFeedController = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetch("http://127.0.0.1:3001/posts", {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((result) => result.json())
      .then((result) => {
        console.log("result: ", result);
      })
      .catch((err) => {
        console.log("post error:  ", err);
      });

    // setPosts(response);
    // setIsLoading(false);

    return () => {
      setPosts([]);
    };
  }, []);

  return { isLoading, posts };
};

export default useFeedController;
