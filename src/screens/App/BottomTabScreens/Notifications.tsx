import React from "react";
import {
  Box,
  Text,
  Post,
  Searchbar,
  SearchFilters,
  MessageListing,
} from "../../../components";
import Notify from "../../../data/notify";

const Notifications = () => {
  return (
    <Box flex={1} backgroundColor={"white"} mt={"xl"} pt={"m"}>
      <Box flexDirection={"row"} justifyContent={"space-between"} p={"m"} mt={'m'} >
        <Text variant={"header"}>Notifications</Text>
      </Box>
      <Box style={{ paddingBottom: 80 }}>
        <MessageListing data={Notify} />
      </Box>
    </Box>
  );
};

export default Notifications;
