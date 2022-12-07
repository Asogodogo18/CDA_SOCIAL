import React from "react";
import Box from "../Box";
import Text from "../Text";

const EmptySearch = () => {
  return (
    <Box flex={1} height={'100%'} justifyContent="center" alignItems={"center"}>
      <Text variant={"title1"}>Empty Search</Text>
      <Text px={'xl'} mt={'ml'} textAlign={'center'} variant={"title"}>Veuillez éffectuer une recherche afin de recevoir des suggestions</Text>

    </Box>
  );
};

export default EmptySearch;
