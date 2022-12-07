import { View, Text } from "react-native";
import React, { useState } from "react";
import {
  useDeleteMessageMutation,
  useSendChatMessageMutation,
} from "../../Api/MessageApi";

const useMessageController = () => {
  const [
    sendChatMessage,
    {
      isLoading: isSending,
      isError,
      isSuccess,
      isUninitialized,
      error,
      data: requestResponse,
    },
  ] = useSendChatMessageMutation();

  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "inactive" | "sending" | "sent" | "failed"
  >("inactive");

  const onChangeMessage = (text) => {
    setMessage(text);
  };

  const onDeleteMessage = () => {
    //TODO Transaction delete chat message
  };
  const onSubmitMessage = (payload: { chatId: string; senderId: string }) => {
    setStatus("sending");
    console.log("controller chat \n");

    console.log("chatId: ", payload.chatId);
    console.log("senderId: ", payload.senderId);

    const formdata = new FormData();
    formdata.append("chat_id", payload.chatId);
    formdata.append("sent_by", payload.chatId);
    formdata.append("message", message);

    console.log("message: ", message);

    sendChatMessage(formdata);

    //cleanup
    setMessage("");
  };

  return {
    message,
    onChangeMessage,
    onSubmitMessage,
    onDeleteMessage,
    isSending,
    isSuccess,
    isError,
    isUninitialized,
    error,
    requestResponse,
  };
};

export default useMessageController;
