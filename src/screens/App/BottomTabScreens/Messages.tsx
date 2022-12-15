import { SimpleLineIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
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
import { useUserContext } from "../../../Context";
import useChatController from "../../../viewController/Messages/ChatController";
import { Skeleton } from "moti/skeleton";
const { width, height } = Dimensions.get("screen");

const Messages = () => {
  const { getUserChats } = useChatController();
  const { user } = useUserContext();
  const [isActive, setisActive] = useState(0);

  const {
    isLoading,
    isError,
    isFetching,
    isSuccess,
    isUninitialized,
    error,
    data,
  } = getUserChats(user.id);

  console.log("chats success: ", isSuccess);
  console.log("chats error: ", error);
  console.log("chats data: ", data);

  const onSwitch = () => {
    setisActive(isActive == 1 ? 0 : 1);
  };
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
            loader={false}
            value={search}
            onChange={onSearchChange}
            placeholder="Recherche"
          />
        </Box>
        <SwitchControl activeIndex={isActive} onSwitch={onSwitch} />
        <SectionHeader title={"En Ligne"} more={true} />
        {!isFetching || isLoading ? (
          <Box
            flexDirection={"row"}
            justifyContent={"space-between"}
            m={"s"}
            mb={"xxl"}
            p={"m"}
          >
            <Skeleton
              colorMode={"light"}
              width={75}
              height={50}
              radius="square"
            />
            <Skeleton
              colorMode={"light"}
              width={75}
              height={50}
              radius="square"
            />
            <Skeleton
              colorMode={"light"}
              width={75}
              height={50}
              radius="square"
            />
            <Skeleton
              colorMode={"light"}
              width={75}
              height={50}
              radius="square"
            />
          </Box>
        ) : (
          <Stories data={FollowingList} />
        )}

        <SectionHeader title={"Tous Les Messages"} more={false} />

        {isActive === 0 ? (
          <MessageListing
            states={{
              isLoading,
              isError,
              isFetching,
              isSuccess,
              isUninitialized,
              error,
            }}
            data={data}
          />
        ) : null}
      </Box>
    </ScrollView>
  );
};

export default Messages;
