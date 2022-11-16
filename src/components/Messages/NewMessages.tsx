import React from "react";
import { Image, TouchableOpacity } from "react-native";
import Box from "../shared/Box";
import Text from "../shared/Text";

const NewMessage = ({ data, onPress }) => {
  const Pill = () => {
    return (
      <Box
        backgroundColor={"borderColor1"}
        borderRadius={10}
        width={10}
        height={10}
        position={"relative"}
        right={15}
        top={25}
      />
    );
  };
  return (
    <Box flex={1}>
     
        <TouchableOpacity onPress={onPress} style={{flexDirection:'row',alignItems:"center",margin:8}}>
          <Image
            source={{ uri: data.avatar }}
            style={{ height: 60, width: 60, borderRadius: 50 }}
            resizeMode="cover"
          />
          {data.isnect && <Pill />}

          <Text variant={"title"} style={{ marginLeft: 15 }}>
            {data.nom}
          </Text>
        </TouchableOpacity>
 
    </Box>
  );
};

export default NewMessage;
