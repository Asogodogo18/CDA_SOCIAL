import React from "react";
import { ActivityIndicator } from "react-native";
import Box from "./Box";
import Text from "./Text";

type LoaderProps = {
  message: string;
};

const Loader: React.FC<LoaderProps> = ({ message }) => {
  return (
    <Box flex={1} justifyContent={"center"} alignItems={"center"}>
      <ActivityIndicator size={"large"} color={"green"} />

      <Text textAlign={"center"} variant={"title"}>
        En cours de chargement, Veuillez Patienter{" "}
      </Text>
    </Box>
  );
};

export default Loader;
