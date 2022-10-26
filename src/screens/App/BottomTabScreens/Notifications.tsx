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
    <Box flex={1} backgroundColor={"white"}>
      <Text variant={'titleBold'} style={{marginTop:30,margin:5,padding:5}}>Noticification</Text>
      <Box style={{paddingBottom:150}}>
        <MessageListing data={Notify} />
      </Box>
    </Box>
  );
};

export default Notifications;
