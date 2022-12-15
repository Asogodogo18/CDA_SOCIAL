import React from "react";
import { ScrollView } from "react-native";
import { useListUserNotificationsQuery } from "../../../Api/NotificationApi";
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
import { useUserContext } from "../../../Context";
import Notify from "../../../data/notify";
import useNotificationController from "../../../viewController/Notifications/NotificationController";

const Notifications = () => {
  const { user } = useUserContext();
  const { getAllUserNotifications } = useNotificationController();
  const { data, isLoading, isFetching, isError, error } =
    getAllUserNotifications(user.id);

    // console.log('notifications: ',data);
    // console.log('notifications status : ',isLoading);
    // console.log('notifications error: ',error);


    
  return (
    <>
      <MainHeader title="Notifications" />
     <ScrollView
      bounces
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: "#F3F3F3",
        paddingTop: 20,
        paddingBottom: 55,
      }}
    >
      <Box style={{ paddingBottom: 10 }}>
        <NotificationListing data={Notify} />
      </Box>
    </ScrollView>
    </>
   
  );
};

export default Notifications;
