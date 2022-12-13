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
<<<<<<< HEAD
=======
import { SafeAreaView } from "react-native-safe-area-context";
>>>>>>> ff74b07883f22ef631abf492c9f0f2be9b161965

const NewMessage = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");

  const onSearchChange = (param: string) => {
    setSearch(param);
  };
  return (
<<<<<<< HEAD
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

=======
    <SafeAreaView style={{ flex: 1 }}>
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
    </SafeAreaView>
  );
};

>>>>>>> ff74b07883f22ef631abf492c9f0f2be9b161965
export default NewMessage;
