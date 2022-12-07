import {
  Box,
  MessageHeader,
  Message,
  ReplyField,
  ErrorDisplayView,
  Loader,
} from "../../../components";
import React, { useEffect, useState } from "react";
import HeaderMsg from "../../../data/headerMsg";
import { singleMessage, singleMessageWithMedia } from "../../../data/message";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useChatController from "../../../viewController/Messages/ChatController";
import useMessageController from "../../../viewController/Messages/MessageController";
import { useUserContext } from "../../../Context";

const Chats = ({ navigation, route }) => {
  const [chatId, setChatId] = useState("");
  const { getSingleChatById } = useChatController();
  const { user } = useUserContext();
  const {
    isSending,
    isSuccess: isSent,
    isError: notSent,
    error: sendingError,
    requestResponse,
    onChangeMessage,
    onSubmitMessage,
    message,
  } = useMessageController();
  console.log("sending : ", isSending);
  console.log("isSent: ", isSent);
  console.log("isErrorSending: ", notSent);
  console.log("error while sending: ", sendingError);
  console.log("request res: ", requestResponse?.data?.message);

  const {
    isLoading,
    isFetching,
    isError,
    isSuccess,
    isUninitialized,
    data,
    error,
  } = getSingleChatById(chatId);

  useEffect(() => {
    if (route.params.chatId !== undefined) {
      setChatId(route.params.chatId);
    }
    return () => {
      setChatId(null);
    };
  }, []);

  if (isLoading || isFetching || isUninitialized) {
    return <Loader message="En cours de chargement, Veuillez Patienter" />;
  }

  if (isError || [isSuccess, data?.code !== 200].every(Boolean)) {
    return (
      <ErrorDisplayView message={isError ? error?.error : data?.message} />
    );
  }

  if ([isSuccess, data?.code === 200, data?.chat == undefined].every(Boolean)) {
    return (
      <ErrorDisplayView
        message={
          "Vous n'avez aucun message en ce moment, Veuillez démarrer une conversation"
        }
      />
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box flex={1} style={{ paddingBottom: 60 }}>
        <MessageHeader
          onGoBack={() => navigation.goBack()}
          onMenuPress={() => {}}
          user={data.chat["user_two"]}
        />
        <ChatContent
          messages={data?.chat?.messages.data}
          sender={data?.chat["user_one"]["id"]}
        />
        <Box position={"absolute"} bottom={0} width={"100%"} flex={1}>
          <ReplyField
            value={message}
            onChange={onChangeMessage}
            onSubmit={() => onSubmitMessage({ chatId, senderId: user.id })}
            placeholder="Votre Message..."
          />
        </Box>
      </Box>
    </SafeAreaView>
  );
};

const ChatContent = ({ messages, sender }) => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      {messages?.map((message, index) => (
        <Message
          key={index}
          self={message?.sent_by === sender}
          message={{
            text: message.message,
            media: message.media,
            timestamp: message.time,
          }}
        />
      ))}
    </ScrollView>
  );
};

export default Chats;
