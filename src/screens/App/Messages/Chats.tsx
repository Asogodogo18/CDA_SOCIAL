import { Box, MessageHeader, Message, ReplyField } from "../../../components";
import React from "react";
import HeaderMsg from "../../../data/headerMsg";
import { singleMessage, singleMessageWithMedia } from "../../../data/message";
import { ScrollView } from "react-native";

const Chats = ({ navigation }) => {
  return (
    <Box flex={1} mt={"xl"} style={{ paddingBottom: 60 }}>
      <MessageHeader
        onGoBack={() => navigation.goBack()}
        onMenuPress={() => {}}
        user={HeaderMsg}
      />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Message self={false} message={singleMessage} />
        <Message self={true} message={singleMessage} />
        <Message self={false} message={singleMessageWithMedia} />
        <Message self={false} message={singleMessageWithMedia} />
        <Message self={true} message={singleMessage} />
        <Message self={true} message={singleMessageWithMedia} />
      </ScrollView>
      <ReplyField placeholder="Votre Message..." />
    </Box>
  );
};

export default Chats;
