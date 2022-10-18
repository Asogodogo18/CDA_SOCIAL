import { Image, TouchableOpacity } from "react-native";
import React from "react";

import Box from "../shared/Box";
import Text from "../shared/Text";
import { SingleMessagePreviewProps } from "../../types/global";

const SingleMessagePreview: React.FC<SingleMessagePreviewProps> = ({
  thumbnail,
  name,
  lastMessage,
  onPress,
}) => {
  return (
    <Box
      flexDirection={"row"}
      height={75}
      width={"100%"}
      backgroundColor={"white"}
      alignItems={"center"}
    >
      <TouchableOpacity
        onPress={onPress}
        style={{ flexDirection: "row", flex: 1 }}
      >
        <Box flex={2} justifyContent={"center"} alignItems={"center"}>
          <Image
            source={{ uri: thumbnail }}
            resizeMode="cover"
            style={{
              width: 60,
              height: 60,
              borderRadius: 8,
              overflow: "hidden",
            }}
          />
        </Box>
        <Box flex={6} ml={"l"} py={"m"} justifyContent={"space-around"}>
          <Text variant={"title1"}>{name}</Text>
          <Text variant={"caption"}>{lastMessage.text}</Text>
        </Box>
        <Box
          flex={2}
          py={"m"}
          justifyContent={"space-around"}
          alignItems={"center"}
        >
          {lastMessage.unread && <Pill />}
          <Text variant={"caption"}>{lastMessage.timestamp}</Text>
        </Box>
      </TouchableOpacity>
    </Box>
  );
};

export default SingleMessagePreview;

const Pill = () => {
  return (
    <Box
      backgroundColor={"borderColor1"}
      borderRadius={10}
      width={10}
      height={10}
    />
  );
};
