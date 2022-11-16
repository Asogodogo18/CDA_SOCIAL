import { View, Text } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { PostApi, UserApi } from "../../Api";
import debounce from "lodash.debounce";

const useUserController = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (text) => {
    setSearchTerm(text);
  };

  if (searchTerm !== "") {
  }

  const debouncedResults = useMemo(() => {
    return debounce(handleChange, 300);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  return { isLoading, searchTerm, handleChange, error, debouncedResults };
};

export default useUserController;
