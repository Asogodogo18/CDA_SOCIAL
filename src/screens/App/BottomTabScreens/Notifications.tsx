import React from "react";
import { ScrollView } from "react-native";
import {
  Box,
  Text,
  Post,
  Searchbar,
  SearchFilters,
  MessageListing,
  MainHeader,
  NotificationListing,
} from "../../../components";
import Notify from "../../../data/notify";

const Notifications = () => {
  return (
    <ScrollView
      bounces
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: "#F3F3F3",
        paddingTop: 20,
        paddingBottom: 50,
      }}
    >
      <MainHeader title="Notifications" />
      <Box style={{ paddingBottom: 10 }}>
        <NotificationListing data={Notify} />
      </Box>
    </ScrollView>
  );
};

export default Notifications;
