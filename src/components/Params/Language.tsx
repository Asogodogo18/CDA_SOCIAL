import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { View } from "react-native";
import Box from "../shared/Box";
import Text from "../shared/Text";
import {TextInput } from "../";

import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign, Ionicons } from "@expo/vector-icons";

const Language = () => {
  const navigation = useNavigation();
  const [langageSelect, setLangageSelect] = useState("");
  return (
    <Box flex={1}>
      <Box
        flexDirection={"row"}
        backgroundColor={"white"}
        elevation={5}
        height={50}
        width={"100%"}
        mt={"xl"}
        p={"ml"}
        // justifyContent={"center"}
        alignItems={"center"}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="ios-chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text variant={"titleBold"} marginLeft={"xl"}>
          Langage d'affichage
        </Text>
      </Box>
      <Box mt={"xxxl"}>
        <Text variant={"subheader"} textAlign={"center"} p={"xxxl"}>
          Choisissez votre langage d'affichage
        </Text>
        <TextInput
          type="dropdown"
          onChange={setLangageSelect}
          value={langageSelect}
          dropdownValues={["Votre Langage", "Français", "Anglais", "Arabe"]}
          alignSelf={"center"}
        />
        <Text
          variant={"title"}
          p={"ml"}
          color={"overlay"}
          textAlign={"center"}
          mt={"xl"}
        >
          Choisissez la langue de votre choix pour l'interface de votre compte.
          Cela n'affecte pas la langue du contenu que vous voyez dans votre
          flux.
        </Text>
      </Box>
    </Box>
  );
};

export default Language;
