import React from "react";
import Box from "../Box";
import Text from "../Text";

const EmptyUserContent = () => {
  return (
    <Box flex={1} height={"100%"} justifyContent="center" alignItems={"center"}>
      <Text variant={"title1"}>Empty Post</Text>
      <Text px={"xl"} mt={"ml"} textAlign={"center"} variant={"title"}>
        Cet utilisateur n'a aucun poste
      </Text>
    </Box>
  );
};

export default EmptyUserContent;
