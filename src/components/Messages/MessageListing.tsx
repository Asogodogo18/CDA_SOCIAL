import { FlatList } from "react-native";
import React from "react";
import { SingleMessagePreviewProps } from "../../types/global";
import SingleMessagePreview from "../../components/Messages/SingleMessagePreview";

type MessageListingProps = {
  data: SingleMessagePreviewProps[];
};

const MessageListing: React.FC<MessageListingProps> = ({ data }) => {
  const renderItem = ({ item }) => <SingleMessagePreview {...item} />;

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.name}
    />
  );
};

export default MessageListing;
