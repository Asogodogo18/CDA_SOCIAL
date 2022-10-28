import { SimpleLineIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { ScrollView, TouchableOpacity, Dimensions } from "react-native";
import {
  Box,
  Searchbar,
  Text,
  SwitchControl,
  Stories,
  MessageListing,
  SectionHeader,
  MainHeader,
} from "../../../components";
import FollowingList from "../../../data/stories";
import defaultMessageList from "../../../data/messageLisiting";
const { width, height } = Dimensions.get("screen");

const Messages = () => {
  const [search, setSearch] = useState("");

  const onSearchChange = (param: string) => {
    setSearch(param);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      nestedScrollEnabled
      contentContainerStyle={{ paddingBottom: 50, flexGrow: 1 }}
    >
      <Box flex={1} mt={"m"} pt={"m"}>
        <MainHeader title="Messages" />
        <Box mb={"ml"}>
          <Searchbar
            value={search}
            onChange={onSearchChange}
            placeholder="Recherche"
          />
        </Box>
        <SwitchControl />
        <SectionHeader title={"En Ligne"} more={true} />

        <Stories data={FollowingList} />
        <SectionHeader title={"Tous Les Messages"} more={false} />

        <MessageListing data={defaultMessageList} />
      </Box>
    </ScrollView>
  );
};

export default Messages;
