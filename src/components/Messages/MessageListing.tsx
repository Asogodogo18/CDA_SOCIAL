import { FlatList } from "react-native";
import React, { useCallback } from "react";
import { SingleMessagePreviewProps } from "../../types/global";
import SingleMessagePreview from "../../components/Messages/SingleMessagePreview";
import { useNavigation } from "@react-navigation/native";

type MessageListingProps = {
  data: SingleMessagePreviewProps[];
};

const MessageListing: React.FC<MessageListingProps> = ({ data }) => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("Accueil", { screen: "Chats" });
  };

  const renderItem = ({ item }) => (
    <SingleMessagePreview onPress={handlePress} {...item} />
  );

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
