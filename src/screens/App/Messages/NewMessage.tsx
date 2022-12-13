import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import {
  Box,
  MainHeader,
  NewMessages,
  Searchbar,
  SectionHeader,
} from "../../../components";
import { newMessage } from "../../../data/NewMessage";
import { useNavigation } from "@react-navigation/native";

const NewMessage = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");

  const onSearchChange = (param: string) => {
    setSearch(param);
  };
  return (
    <Box flex={1} mt={"ml"}>
      <MainHeader title="Nouveau" />
      <Box mb={"ml"}>
        <Searchbar
          value={search}
          onChange={onSearchChange}
          placeholder="Recherche"
        />
      </Box>
      <SectionHeader title={"Suggestion"} more={false} />

      <FlatList
        data={newMessage}
        renderItem={({ item }) => (
          <NewMessages
            data={item}
            onPress={() => navigation.navigate("Chats")}
          />
        )}
        keyExtractor={(i) => i.id}
      />
    </Box>
  );
};

export default NewMessage;
