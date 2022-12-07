import { ActivityIndicator, FlatList } from "react-native";
import React, { useCallback } from "react";
import { SingleChatProps } from "../../types/global";
import SingleChat from "../../components/Messages/SingleChat";
import { useNavigation } from "@react-navigation/native";
import Box from "../shared/Box";
import Text from "../shared/Text";
import Loader from "../shared/Loader";
import ErrorDisplayView from "../shared/ErrorDisplayView";

type MessageListingProps = {
  data: any;
  states: any;
};

const MessageListing: React.FC<MessageListingProps> = ({ data, states }) => {
  const { isLoading, isError, isFetching, isSuccess, isUninitialized, error } =
    states;

  if (isLoading || isFetching || isUninitialized) {
    return <Loader message="En cours de chargement, Veuillez Patienter" />;
  }

  if (isError || [isSuccess, data?.code !== 200].every(Boolean)) {
    return <ErrorDisplayView message={isError ? error?.error : data.message} />;
  }

  if (
    [isSuccess, data?.code === 200, data?.chats.length === 0].every(Boolean)
  ) {
    return (
      <ErrorDisplayView
        message={
          "Vous n'avez aucun message en ce moment, Veuillez démarrer une conversation"
        }
      />
    );
  }

  const renderItem = ({ item }) => <SingleChat chatId={item.id} />;

  return (
    <FlatList
      bounces
      data={data?.chats}
      nestedScrollEnabled
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id}
    />
  );
};

export default MessageListing;
