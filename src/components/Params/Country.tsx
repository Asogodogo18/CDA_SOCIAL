import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { View } from "react-native";
import Box from "../shared/Box";
import Text from "../shared/Text";
import { SectionInput, Line, TextInput } from "../";

import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign, Ionicons } from "@expo/vector-icons";

const Country = () => {
  const navigation = useNavigation();
  const [countrySelect, setCountrySelect] = useState("");
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
          country d'affichage
        </Text>
      </Box>
      <Box>
        <Text variant={"subheader"} textAlign={"center"} p={"xxxl"}>
          Choisissez votre Pays
        </Text>
        <TextInput
          type="dropdown"
          onChange={setCountrySelect}
          value={countrySelect}
          dropdownValues={["Votre Pays", "Français", "Anglais", "Arabe"]}
          alignSelf={"center"}
        />
        <Text variant={"title"} p={"ml"} color={'overlay'} textAlign={'center'} mt={'xl'}>
          Choisissez le pays dans lequel vous vivez. Ces informations seront
          affichées publiquement sur votre profil.
        </Text>
      </Box>
    </Box>
  );
};

export default Country;
