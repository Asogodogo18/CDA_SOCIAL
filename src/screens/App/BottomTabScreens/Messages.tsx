import { SimpleLineIcons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, TouchableOpacity, Dimensions } from "react-native";
import {
  Box,
  Searchbar,
  Text,
  SwitchControl,
  Stories,
  MessageListing,
} from "../../../components";
import FollowingList from "../../../data/stories";
import defaultMessageList from "../../../data/messageLisiting";
const { width, height } = Dimensions.get("screen");
const Messages = () => {
  return (
    <ScrollView nestedScrollEnabled style={{  paddingBottom: 150,flexGrow:1 }} >
      <Box flex={1} mt={"m"} pt={"m"}>
        <Box
          flexDirection={"row"}
          justifyContent={"space-between"}
          // padding={"m"}
          mt={"ml"}
          mb={"ml"}
          p={"m"}
        >
          <Text variant={"header"}>Messages</Text>
          <TouchableOpacity>
            <SimpleLineIcons name="options" size={24} color="black" />
          </TouchableOpacity>
        </Box>
        <Box mb={"ml"}>
          <Searchbar placeholder="Recherche" />
        </Box>
        <SwitchControl />
        <Box mt={"ml"} p={"m"}>
          <Text variant={"titleBold"}>En Ligne</Text>
        </Box>
        <Box>
          <Stories data={FollowingList} />
        </Box>
        <MessageListing data={defaultMessageList} />
      </Box>
    </ScrollView>
  );
};

export default Messages;
