import { View, Text } from "react-native";
import React, { useState } from "react";

const useMessageController = () => {
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<
    "inactive" | "sending" | "sent" | "failed"
  >("inactive");

  const onChangeMessage = (text) => {
    setMessage(message);
  };

  const onDeleteMessage = () => {
    //TODO Transaction delete chat message
  };
  const onSubmitMessage = () => {
    setStatus("sending");
    //TODO Transactions to send chat message

    //last
    setMessage("");
  };

  return { message, onChangeMessage, onSubmitMessage, onDeleteMessage };
};

export default useMessageController;
