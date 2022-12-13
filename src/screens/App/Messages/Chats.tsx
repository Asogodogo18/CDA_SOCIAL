import {
  Box,
  MessageHeader,
  Message,
  ReplyField,
  ErrorDisplayView,
  Loader,
} from "../../../components";
import React, { useEffect, useRef, useState } from "react";
import _ from "lodash";

import HeaderMsg from "../../../data/headerMsg";
import { singleMessage, singleMessageWithMedia } from "../../../data/message";
import { FlatList, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useChatController from "../../../viewController/Messages/ChatController";
import useMessageController from "../../../viewController/Messages/MessageController";
import { useUserContext } from "../../../Context";

const Chats = ({ navigation, route }) => {
  const [chatId, setChatId] = useState("");
  const isChatCreated = useRef(false);
  const {
    getSingleChatById,
    createChat,
    isCreationError,
    isCreationLoading,
    isCreationSuccess,
    isCreationUninitialized,
    createChatData,
  } = useChatController();
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

  const newChat = async (receiverId: string) => {
    try {
      const payload = await createChat({ senderId: user.id, receiverId });
      console.log("fulfilled", payload);
      if (payload.code == 200) {
        setChatId(payload.chat.id);
        isChatCreated.current = true;
      }
    } catch (error) {
      console.log("rejected: ", error);
    }
  };

  useEffect(() => {
    if (route.params.chatId !== undefined) {
      setChatId(route.params.chatId);
    }
    if (route.params.receiverId !== undefined && !isChatCreated.current) {
      newChat(route.params.receiverId);
    }
    return () => {
      setChatId('');
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
        <ChatContent messages={data?.chat?.messages.data} sender={user.id} />
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
    <FlatList
      style={{ flex: 1 }}
      contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 10 }}
      data={_.reverse([...messages])}
      inverted={true}
      renderItem={({ item: message }) => (
        <Message
          self={message?.sent_by === sender}
          message={{
            text: message.message,
            media: message.media,
            timestamp: message.time,
          }}
        />
      )}
    />
  );
};

export default Chats;
