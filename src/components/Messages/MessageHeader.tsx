import { TouchableOpacity } from "react-native";
import React from "react";
import Box from "../shared/Box";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import Avatar from "../shared/Avatar";
import Text from "../shared/Text";

type MessageHeaderProps = {
  user: any;
  onGoBack: () => void;
  onMenuPress: () => void;
};

const Header: React.FC<MessageHeaderProps> = ({
  user,
  onGoBack,
  onMenuPress,
}) => {
  return (
    <Box
      width={"100%"}
      height={60}
      backgroundColor={"white"}
      flexDirection={"row"}
      px={"s"}
    >
      <TouchableOpacity
        onPress={onGoBack}
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginRight: 20,
        }}
      >
        <Ionicons name="chevron-back-sharp" size={40} color="#434343" />
      </TouchableOpacity>
      <Avatar type="header" source={{ uri: user.avatar }} />
      <Box
        position={"absolute"}
        top={0}
        bottom={0}
        right={0}
        left={0}
        alignItems={"center"}
        mx={"xl"}
        justifyContent={"center"}
      >
        <Text variant={"title1"}>{user.name}</Text>
        <Text mt={'s'} variant={"caption"} fontSize={12} >{user.username}</Text>
      </Box>
      <TouchableOpacity
        onPress={onMenuPress}
        style={{ position: "absolute", alignSelf: "center", right: 10 }}
      >
        <SimpleLineIcons name="options-vertical" size={20} color="#848383" />
      </TouchableOpacity>
    </Box>
  );
};

export default Header;
